"use client";

/**
 * The honeypot of the public forms (see lib/spam-guard): a field people never
 * see or reach, which form-filling bots complete like any other.
 *
 * It sits off-screen rather than under `display: none` — many bots skip
 * fields hidden that way — and carries a name bots like to fill. It is out of
 * the tab order and hidden from screen readers, and autocomplete is off so a
 * browser never fills it for a person.
 */
export default function HoneypotField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-10000px",
        top: "auto",
        width: 1,
        height: 1,
        overflow: "hidden",
      }}
    >
      <label>
        Company fax (leave this field empty)
        <input
          type="text"
          name="company_fax"
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
