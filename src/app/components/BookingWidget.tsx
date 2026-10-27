import { useEffect, useRef } from "react";

const WIDGET_SRC = "https://dev.holidayget.com/booking-widget.js?v=2";
const WIDGET_ID = "1d892a22-10b2-4493-984d-c565dfb9e495";

export function BookingWidget() {
  const hostRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const script = document.createElement("script");
    script.src = WIDGET_SRC;
    script.async = true;
    script.dataset.widgetId = WIDGET_ID;
    host.appendChild(script);

    return () => {
      host.replaceChildren();
    };
  }, []);

  return (
    <span
      ref={hostRef}
      className="inline-flex items-center"
      dangerouslySetInnerHTML={{ __html: "" }}
    />
  );
}
