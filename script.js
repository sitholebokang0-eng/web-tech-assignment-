
document.addEventListener("DOMContentLoaded", function () {

    // Sign-Up page
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        alert("Welcome to Richfield Connect. Please complete your profile.");

        signupForm.addEventListener("submit", function (event) {
            const email = document.getElementById("email").value.trim();
            const studentNumber =
                document.getElementById("studentNumber").value.trim();

            if (!email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email address.");
                event.preventDefault();
                return;
            }

            if (!/^\d{6,}$/.test(studentNumber)) {
                alert("Student number must contain at least 6 digits.");
                event.preventDefault();
                return;
            }

            event.preventDefault();
            alert("Your details passed the validation checks.");
        });
    }

    // Feed page Post button
    const postForm = document.getElementById("postForm");

    if (postForm) {
        postForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const postContent = document.getElementById("postContent");
            const postMessage = document.getElementById("postMessage");
            const feedContainer = document.getElementById("feedContainer");
            const message = postContent.value.trim();

            if (message === "") {
                postMessage.textContent = "Please enter a message first.";
                return;
            }

            // Create a new post
            const newPost = document.createElement("div");
            newPost.className = "post";

            const username = document.createElement("h3");
            username.textContent = "You";

            const date = document.createElement("small");
            date.textContent = new Date().toLocaleString();

            const content = document.createElement("p");
            content.textContent = message;

            newPost.appendChild(username);
            newPost.appendChild(date);
            newPost.appendChild(content);

            // Insert the new post before the Create Post section
            feedContainer.insertBefore(newPost, postForm.parentElement);

            postContent.value = "";
            postMessage.textContent = "Your post has been added!";
        });
    }

});


// Feed Post button
document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("postForm");

    if (postForm) {
        postForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const postContent = document.getElementById("postContent");
            const postMessage = document.getElementById("postMessage");
            const newPosts = document.getElementById("newPosts");

            const message = postContent.value.trim();

            if (message === "") {
                postMessage.textContent = "Please type a message first.";
                return;
            }

            const post = document.createElement("div");
            post.className = "post";

            const username = document.createElement("h3");
            username.textContent = "You";

            const date = document.createElement("small");
            date.textContent = new Date().toLocaleString();

            const content = document.createElement("p");
            content.textContent = message;

            post.appendChild(username);
            post.appendChild(date);
            post.appendChild(content);

            newPosts.prepend(post);

            postContent.value = "";
            postMessage.textContent = "Your post has been added!";
        });
    }
});
