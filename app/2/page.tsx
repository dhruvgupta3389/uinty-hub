"use client";

import React, { useEffect, useRef, useState } from "react";

// Extend the Window type to include JitsiMeetExternalAPI.
declare global {
  interface Window {
    JitsiMeetExternalAPI: any;
  }
}

export default function JitsiMeetingPage() {
  const jitsiContainerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [jitsiApi, setJitsiApi] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  // This ref prevents re-initialization (e.g. due to React Strict Mode in development)
  const initializedRef = useRef<boolean>(false);

  useEffect(() => {
    // Prevent duplicate initialization.
    if (initializedRef.current) {
      return;
    }
    initializedRef.current = true;

    if (!window.JitsiMeetExternalAPI) {
      setLoading(true);
      const script = document.createElement("script");
      script.src = "https://meet.jit.si/external_api.js";
      script.async = true;
      script.onload = () => {
        setLoading(false);
        initializeJitsi();
      };
      script.onerror = () => {
        setLoading(false);
        setError("Failed to load Jitsi API");
      };
      document.body.appendChild(script);
    } else {
      initializeJitsi();
    }

    // Cleanup the Jitsi API on unmount.
    return () => {
      if (jitsiApi) {
        jitsiApi.dispose();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initializeJitsi = () => {
    if (!jitsiContainerRef.current) {
      setError("Jitsi container not available");
      return;
    }
    try {
      const domain = "meet.jit.si";
      const roomName = "MyCoolMeetingRoom"; // Change this to generate or set dynamically as needed.
      const options = {
        roomName,
        parentNode: jitsiContainerRef.current,
        configOverwrite: {
          enableWelcomePage: false,
          startWithAudioMuted: true,
          startWithVideoMuted: true,
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_BRAND_WATERMARK: false,
        },
        userInfo: {
          displayName: "Your Name",
        },
      };

      const api = new window.JitsiMeetExternalAPI(domain, options);

      api.addEventListener("videoConferenceJoined", () => {
        console.log("Local user joined the conference");
      });

      setJitsiApi(api);
    } catch (err) {
      console.error("Error initializing Jitsi", err);
      setError("Failed to initialize Jitsi Meet");
    }
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h2>Jitsi Meeting</h2>
      {error && (
        <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>
      )}
      {loading && (
        <div style={{ marginBottom: "1rem" }}>Loading Jitsi API...</div>
      )}
      {/* Jitsi meeting container */}
      <div
        ref={jitsiContainerRef}
        style={{
          height: "70vh",
          width: "100%",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}
