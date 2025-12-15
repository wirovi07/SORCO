import React from "react";

export default function WhatsAppButton() {
    return (
        <>
            <a
                href="https://wa.me/573102460681"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
            >
                💬
            </a>

            {/* CSS */}
            <style>{`
                .whatsapp-float {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: #25d366;
                    color: #fff;
                    width: 55px;
                    height: 55px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 26px;
                    box-shadow: 0 4px 12px rgba(0,0,0,.3);
                    z-index: 999;
                }
            `}</style>
        </>
    );
}
