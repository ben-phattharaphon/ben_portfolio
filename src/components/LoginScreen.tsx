"use client";

import React from "react";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <div className="login-screen">
      <div className="login-top">
        {/* Placeholder for top bar content if any */}
      </div>
      <div className="login-middle">
        <div className="login-left">
          <img
            src="https://www.rw-designer.com/icon-image/18835-256x256x4.png"
            alt="Windows XP"
            style={{ width: "120px", marginBottom: "20px", marginRight: '90px' }}
          />
          <div style={{ fontSize: "24px", textAlign: "right", opacity: 0.9 }}>
            To begin, click your user name
          </div>
        </div>
        <div className="login-right">

          <div className="user-card" onClick={onLogin} style={{ marginTop: "10px" }}>
            <div className="user-avatar">
              <img
                src="/hWgjp1e.png"
                alt="User"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <div className="user-name">Ben Phattharaphon</div>
              <div className="user-status">Welcome to my portfolio</div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-bottom">
        <div className="turn-off-btn">
          <div className="turn-off-icon" style={{ backgroundColor: "#ff0000" }}>U</div>
          <span>Turn off computer</span>
        </div>
        <div style={{ opacity: 0.7, fontSize: "14px" }}>
          After you log on, you can add or change accounts. Just go to Control Panel and click User Accounts.
        </div>
      </div>
    </div>
  );
}
