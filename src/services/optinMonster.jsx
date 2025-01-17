export const loadOptinMonster = () => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://a.omappapi.com/app/js/api.min.js';
    script.async = true;
    script.dataset.user = '354263';  // Replace with your user ID if dynamic
    script.dataset.account = '374499'; // Replace with your account ID if dynamic
    document.head.appendChild(script);
  };
  