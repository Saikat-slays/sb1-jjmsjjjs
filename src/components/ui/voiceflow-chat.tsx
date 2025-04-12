import { useEffect } from 'react';

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          versionID: string;
          voice: { url: string };
        }) => void;
        destroy: () => void;
      };
    };
  }
}

export function VoiceflowChat() {
  useEffect(() => {
    // Function to remove test button and prevent its recreation
    const removeTestButton = () => {
      // Use a more specific selector to target the button
      const testButtons = document.querySelectorAll('[class*="voiceflow"]');
      testButtons.forEach(element => {
        if (element instanceof HTMLElement) {
          const buttonText = element.textContent?.toLowerCase() || '';
          if (buttonText.includes('test your agent')) {
            element.style.display = 'none';
            element.style.visibility = 'hidden';
            element.style.opacity = '0';
            element.style.pointerEvents = 'none';
            element.setAttribute('aria-hidden', 'true');
            element.setAttribute('disabled', 'true');
            
            // Remove the element if it's a button
            if (element.tagName === 'BUTTON') {
              element.remove();
            }
          }
        }
      });

      // Add global styles to prevent the button
      const styleId = 'voiceflow-button-remover';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          [class*="voiceflow"] button,
          [class*="voiceflow"] [role="button"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
            position: absolute !important;
            clip: rect(0 0 0 0) !important;
            width: 1px !important;
            height: 1px !important;
            margin: -1px !important;
            overflow: hidden !important;
          }
        `;
        document.head.appendChild(style);
      }
    };

    // Function to clean up Voiceflow instances
    const cleanup = () => {
      try {
        if (window.voiceflow?.chat?.destroy) {
          window.voiceflow.chat.destroy();
        }
        
        // Remove the script
        const existingScript = document.querySelector('script[src*="voiceflow"]');
        if (existingScript) {
          existingScript.remove();
        }

        // Remove the style
        const style = document.getElementById('voiceflow-button-remover');
        if (style) {
          style.remove();
        }

        // Remove any Voiceflow-related elements
        const voiceflowElements = document.querySelectorAll('[class*="voiceflow"]');
        voiceflowElements.forEach(element => element.remove());
      } catch (error) {
        console.warn('Error during cleanup:', error);
      }
    };

    // Clean up existing instances first
    cleanup();

    // Create and load new script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    
    script.onload = () => {
      try {
        window.voiceflow.chat.load({
          verify: { projectID: '67f9fc8a19f6e9bfcac9fa83' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        });

        // Initial removal
        removeTestButton();

        // Aggressive initial monitoring
        for (let i = 0; i < 10; i++) {
          setTimeout(removeTestButton, i * 100);
        }

        // Continuous monitoring at different intervals
        const intervals = [
          setInterval(removeTestButton, 50),  // Very frequent initially
          setInterval(removeTestButton, 250), // Regular check
          setInterval(removeTestButton, 1000) // Backup check
        ];

        // Clear intervals after 10 seconds
        setTimeout(() => {
          intervals.forEach(clearInterval);
        }, 10000);
      } catch (error) {
        console.warn('Error initializing Voiceflow:', error);
      }
    };

    document.body.appendChild(script);

    // Set up a mutation observer with more specific targeting
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const hasVoiceflowElement = Array.from(mutation.addedNodes).some(node => 
            node instanceof HTMLElement && (
              node.className?.includes('voiceflow') ||
              node.querySelector('[class*="voiceflow"]')
            )
          );

          if (hasVoiceflowElement) {
            removeTestButton();
          }
        }
      });
    });

    // Observe the entire document
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style']
    });

    // Cleanup on unmount
    return () => {
      cleanup();
      observer.disconnect();
    };
  }, []);

  return null;
}