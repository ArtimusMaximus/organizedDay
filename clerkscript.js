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
                console.log(user.id);
                console.log(user);
                const newUser = {
                    email: user.emailAddresses[0].emailAddress,
                    clerkID: user.id,
                }
                console.log(newUser);
                const checkForUser = () => {
                    fetch(`/finduser?clerkID=${newUser.clerkID}`)
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.exists) {
                            console.log('data exists ', data)
                            // redirect
                            alert('Redirecting...')
                            window.location = `/goal/${user.id}`;
                            console.log('User already exists, proceed plz');
                        } else if (data.exists === false) {
                            fetch('/', {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(newUser)
                            })
                            .then((res) => res.json())
                            .then(newUser => {
                                console.log('New User: ', newUser);
                                // window.location = '/goal'
                            })
                            .catch(err => console.log(err))
                        }
                    })
                    .catch(err => console.error(err))
                }
                checkForUser();
                    
                
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