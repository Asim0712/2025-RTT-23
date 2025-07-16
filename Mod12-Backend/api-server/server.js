import express from "express";

const app = express();
const PORT = 3000;

app.get("/api/users/:id", async (req, res) => {
    res.send("Welcome to my Proxy Server");

      try {
        const apiResponse = await fetch(
            "https://jsonplaceholder.typicode.com/users",
        );

        if (!apiResponse.ok) {
            throw new Error(`HTTP error! status: ${apiResponse.status}`);
        }

        const users = await apiResponse.json();

        const transformedUsers = users.map((user) => ({
            id: user.id,
          
        }));

        res.json(transformedUsers);


    } catch (error) {
        console.error("Bad Gateway:", error);
        // Send a generic server error response
        res
            .status(404)
            .json({ message: "User not found" });
    }
});




app.get('/api/users/:id', async (req,res) => {
    

});

app.get("/api/comments", async (req, res) => {
    try {
        const apiResponse = await fetch(
            "https://jsonplaceholder.typicode.com/comments",
        );
        if (!apiResponse.ok) {
            throw new Error(`HTTP error! status: ${apiResponse.status}`);
        }
        const comments = await apiResponse.json();

        const transformedComments = comments.map((comments) => ({
            postId: comments.postId,
            id: comments.id,
            name: comments.name,
            email: comments.email,
            body: comments.body,
        }));

        res.json(transformedComments);
    } catch (error) {
        console.error("Error fetching or transforming comments:", error);
        // Send a generic server error response
        res
            .status(500)
            .json({ message: "Failed to fetch data from the external API." });
    }
});


app.get("/api/users", async (req, res) => {
    try {
        const apiResponse = await fetch(
            "https://jsonplaceholder.typicode.com/users",
        );

        if (!apiResponse.ok) {
            throw new Error(`HTTP error! status: ${apiResponse.status}`);
        }

        const users = await apiResponse.json();

        const transformedUsers = users.map((user) => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
        }));

        res.json(transformedUsers);


    } catch (error) {
        console.error("Error fetching or transforming users:", error);
        // Send a generic server error response
        res
            .status(500)
            .json({ message: "Failed to fetch data from the external API." });
    }
});

app.listen(PORT, () => console.log(`Proxy server running on port: ${PORT}`));