const startClerk = async () => {
    const Clerk = window.Clerk;

    try
    {
        await Clerk.load();

        const userButton = document.getElementById('userButton');
        const authLinks = document.getElementById('authLinks');

        Clerk.addListener(({ user }) => {
            authLinks.style.display = user ? 'none' : 'block';

            if (user) {
                // console.log(user.id);
                // console.log(user);
            }
            
        });
        

        if (Clerk.user) {
            Clerk.mountUserButton(userButton)
            // userButton.style.margin = 'auto';
        }

    }
    catch(err)
    {
        console.log(err);
    }
};

(() => {
    const script = document.createElement('script');
    const publishableKey = 'pk_test_cm9idXN0LW1hZ2dvdC03OS5jbGVyay5hY2NvdW50cy5kZXYk';

    script.setAttribute('data-clerk-publishable-key', publishableKey);
    script.src = 'https://cdn.jsdelivr.net/npm/@clerk/clerk-js@latest/dist/clerk.browser.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.addEventListener('load', startClerk);
    script.addEventListener('error', () => {
        document.getElementById('no-frontend-api-warning').hidden = false;
    });
    document.body.appendChild(script);
})();