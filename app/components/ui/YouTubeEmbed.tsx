"use client";

import { useEffect, useRef } from "react";
import { watchHalfVisible } from "../../lib/half-visible";

/**
 * The YouTube player of the /features video lightbox and the design page's
 * video panel.
 *
 * It is only mounted after a click, with `autoplay=1`, so the video starts
 * with sound where the browser allows it (Chrome, Edge). Safari, iOS, Firefox
 * and Brave refuse unmuted autoplay inside a cross-origin iframe even after a
 * click on the page, which left the player sitting on its own play button. For
 * those, the IFrame Player API (`enablejsapi=1`) restarts it muted — muted
 * playback is allowed everywhere — and YouTube's own unmute control is right
 * there. The design page opts out of that (`mutedFallback={false}`). The API
 * script is fetched on the first play, never before.
 *
 * The API also keeps the site's video rule (lib/half-visible): the player
 * pauses while less than half of it is on screen, and picks up again when it
 * is back — only when this paused it, never after the viewer's own pause.
 */

/* Just the corner of the IFrame Player API used here. */
type Player = {
  mute(): void;
  playVideo(): void;
  pauseVideo(): void;
  getPlayerState(): number;
};
type PlayerEvent = { target: Player };
type YouTubeApi = {
  Player: new (
    iframe: HTMLIFrameElement,
    options: { events: Record<string, (event: PlayerEvent) => void> },
  ) => Player;
};

declare global {
  interface Window {
    YT?: YouTubeApi;
    onYouTubeIframeAPIReady?: () => void;
  }
}

/* Player states that mean playback never began. */
const UNSTARTED = -1;
const CUED = 5;
/* Player states that mean it is playing, or about to. */
const PLAYING = 1;
const BUFFERING = 3;
/* `onAutoplayBlocked` is the main signal, but it can fire before the API has
   attached to the iframe. Still not started this long after the player is
   ready counts as blocked too. */
const START_GRACE_MS = 2500;

let api: Promise<YouTubeApi> | null = null;

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  api ??= new Promise<YouTubeApi>((resolve, reject) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve(window.YT!);
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onerror = () => {
      api = null;
      reject(new Error("YouTube IFrame API failed to load"));
    };
    document.head.appendChild(script);
  });
  return api;
}

export default function YouTubeEmbed({
  youtubeId,
  title,
  mutedFallback = true,
}: {
  youtubeId: string;
  title: string;
  /** Restart muted when the browser blocks autoplay with sound. */
  mutedFallback?: boolean;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    let live = true;
    let timer: number | undefined;
    let player: Player | null = null;
    let onScreen = true;
    let pausedOffscreen = false;

    const startMuted = (player: Player) => {
      if (!live) return;
      player.mute();
      player.playVideo();
    };

    const pauseIfOffscreen = (player: Player) => {
      if (onScreen) return;
      const state = player.getPlayerState();
      if (state !== PLAYING && state !== BUFFERING) return;
      player.pauseVideo();
      pausedOffscreen = true;
    };

    const stopWatching = watchHalfVisible(iframe, (visible) => {
      onScreen = visible;
      if (!player) return;
      if (!visible) pauseIfOffscreen(player);
      else if (pausedOffscreen) {
        pausedOffscreen = false;
        player.playVideo();
      }
    });

    loadYouTubeApi()
      .then((YT) => {
        if (!live) return;
        const events: Record<string, (event: PlayerEvent) => void> = {
          onReady: ({ target }) => {
            player = target;
            pauseIfOffscreen(target);
            if (!mutedFallback) return;
            timer = window.setTimeout(() => {
              const state = target.getPlayerState();
              if (state === UNSTARTED || state === CUED) startMuted(target);
            }, START_GRACE_MS);
          },
          // Autoplay, or a muted restart, can start it while off screen.
          onStateChange: ({ target }) => pauseIfOffscreen(target),
        };
        if (mutedFallback)
          events.onAutoplayBlocked = ({ target }) => startMuted(target);
        // Attaches to the iframe below rather than replacing it. Never
        // destroy() it: that removes the iframe React owns.
        new YT.Player(iframe, { events });
      })
      // Without the API the plain autoplay attempt still stands.
      .catch(() => {});

    return () => {
      live = false;
      window.clearTimeout(timer);
      stopWatching();
    };
  }, [youtubeId, mutedFallback]);

  return (
    <iframe
      key={youtubeId}
      ref={iframeRef}
      // Default controls are kept so viewers can scrub and pause.
      // youtube-nocookie still trims the share / watch-later overlay, rel=0
      // keeps end cards to this channel and iv_load_policy=3 drops
      // annotations.
      src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 h-full w-full border-0"
    />
  );
}
