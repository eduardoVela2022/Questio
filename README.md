# Questio

# API Docs

## GET /quiz

### Request:

```js
fetch(`${API}/quiz`);
```

### Response:

```js
[
  {
    id: 28,
    name: "Sample Quiz 10",
    userId: 11,
    createdAt: "2024-07-08T20:25:51.241Z",
    updatedAt: "2024-07-08T20:25:51.241Z",
    questions: [
      {
        id: 39,
        question: "What is the capital of Mexico?",
        quizId: 28,
        createdAt: "2024-07-08T20:25:51.243Z",
        updatedAt: "2024-07-08T20:25:51.243Z",
        answers: [
          {
            id: 60,
            answer: "CDMX",
            isCorrect: true,
            questionId: 39,
            createdAt: "2024-07-08T20:25:51.244Z",
            updatedAt: "2024-07-08T20:25:51.244Z",
          },
          {
            id: 59,
            answer: "Berlin",
            isCorrect: false,
            questionId: 39,
            createdAt: "2024-07-08T20:25:51.244Z",
            updatedAt: "2024-07-08T20:25:51.244Z",
          },
          {
            id: 58,
            answer: "Paris",
            isCorrect: false,
            questionId: 39,
            createdAt: "2024-07-08T20:25:51.244Z",
            updatedAt: "2024-07-08T20:25:51.244Z",
          },
        ],
      },
      {
        id: 40,
        question: "What is 2 + 2 + 6?",
        quizId: 28,
        createdAt: "2024-07-08T20:25:51.243Z",
        updatedAt: "2024-07-08T20:25:51.243Z",
        answers: [
          {
            id: 62,
            answer: "10",
            isCorrect: true,
            questionId: 40,
            createdAt: "2024-07-08T20:25:51.244Z",
            updatedAt: "2024-07-08T20:25:51.244Z",
          },
          {
            id: 61,
            answer: "5",
            isCorrect: false,
            questionId: 40,
            createdAt: "2024-07-08T20:25:51.244Z",
            updatedAt: "2024-07-08T20:25:51.244Z",
          },
        ],
      },
    ],
  },
];
```

## POST /quiz

### Request:

```js
fetch(`${API}/quiz`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: withAuth, //helper
  },
  body: JSON.stringify({
    name: "Sample Quiz 10",
    questions: [
      {
        question: "What is the capital of Mexico?",
        answers: [
          { answer: "Paris", isCorrect: false },
          { answer: "Berlin", isCorrect: false },
          { answer: "CDMX", isCorrect: true },
        ],
      },
      {
        question: "What is 2 + 2 + 6?",
        answers: [
          { answer: "5", isCorrect: false },
          { answer: "10", isCorrect: true },
        ],
      },
    ],
  }),
});
```

### Response

```js
{
  "id": 28,
  "name": "Sample Quiz 10",
  "userId": 11,
  "createdAt": "2024-07-08T20:25:51.241Z",
  "updatedAt": "2024-07-08T20:25:51.241Z",
  "questions": [
    {
      "id": 39,
      "question": "What is the capital of Mexico?",
      "quizId": 28,
      "createdAt": "2024-07-08T20:25:51.243Z",
      "updatedAt": "2024-07-08T20:25:51.243Z",
      "answers": [
        {
          "id": 58,
          "answer": "Paris",
          "isCorrect": false,
          "questionId": 39,
          "createdAt": "2024-07-08T20:25:51.244Z",
          "updatedAt": "2024-07-08T20:25:51.244Z"
        },
        {
          "id": 59,
          "answer": "Berlin",
          "isCorrect": false,
          "questionId": 39,
          "createdAt": "2024-07-08T20:25:51.244Z",
          "updatedAt": "2024-07-08T20:25:51.244Z"
        },
        {
          "id": 60,
          "answer": "CDMX",
          "isCorrect": true,
          "questionId": 39,
          "createdAt": "2024-07-08T20:25:51.244Z",
          "updatedAt": "2024-07-08T20:25:51.244Z"
        }
      ]
    },
    {
      "id": 40,
      "question": "What is 2 + 2 + 6?",
      "quizId": 28,
      "createdAt": "2024-07-08T20:25:51.243Z",
      "updatedAt": "2024-07-08T20:25:51.243Z",
      "answers": [
        {
          "id": 61,
          "answer": "5",
          "isCorrect": false,
          "questionId": 40,
          "createdAt": "2024-07-08T20:25:51.244Z",
          "updatedAt": "2024-07-08T20:25:51.244Z"
        },
        {
          "id": 62,
          "answer": "10",
          "isCorrect": true,
          "questionId": 40,
          "createdAt": "2024-07-08T20:25:51.244Z",
          "updatedAt": "2024-07-08T20:25:51.244Z"
        }
      ]
    }
  ]
}
```

## PUT /quiz/:quizId

### Request:

```js
fetch(`${API}/quiz/28`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: withAuth, //helper
  },
  body: JSON.stringify({
    name: "Sample Quiz 115",
    questions: [
      {
        question: "What is the capital of France?",
        answers: [
          { answer: "Paris", isCorrect: true },
          { answer: "Berlin", isCorrect: false },
          { answer: "CDMX", isCorrect: false },
        ],
      },
      {
        question: "What is 2 + 2 + 6 + 20?",
        answers: [
          { answer: "5", isCorrect: false },
          { answer: "10", isCorrect: false },
          { answer: "100", isCorrect: false },
          { answer: "30", isCorrect: true },
        ],
      },
    ],
  }),
});
```

### Response

```js
{
  "id": 28,
  "name": "Sample Quiz 115",
  "userId": 11,
  "createdAt": "2024-07-08T20:25:51.241Z",
  "updatedAt": "2024-07-08T20:42:32.276Z",
  "questions": [
    {
      "id": 41,
      "question": "What is the capital of France?",
      "quizId": 28,
      "createdAt": "2024-07-08T20:42:32.277Z",
      "updatedAt": "2024-07-08T20:42:32.277Z",
      "answers": [
        {
          "id": 63,
          "answer": "Paris",
          "isCorrect": true,
          "questionId": 41,
          "createdAt": "2024-07-08T20:42:32.278Z",
          "updatedAt": "2024-07-08T20:42:32.278Z"
        },
        {
          "id": 64,
          "answer": "Berlin",
          "isCorrect": false,
          "questionId": 41,
          "createdAt": "2024-07-08T20:42:32.279Z",
          "updatedAt": "2024-07-08T20:42:32.279Z"
        },
        {
          "id": 65,
          "answer": "CDMX",
          "isCorrect": false,
          "questionId": 41,
          "createdAt": "2024-07-08T20:42:32.280Z",
          "updatedAt": "2024-07-08T20:42:32.280Z"
        }
      ]
    },
    {
      "id": 42,
      "question": "What is 2 + 2 + 6 + 20?",
      "quizId": 28,
      "createdAt": "2024-07-08T20:42:32.280Z",
      "updatedAt": "2024-07-08T20:42:32.280Z",
      "answers": [
        {
          "id": 66,
          "answer": "5",
          "isCorrect": false,
          "questionId": 42,
          "createdAt": "2024-07-08T20:42:32.281Z",
          "updatedAt": "2024-07-08T20:42:32.281Z"
        },
        {
          "id": 67,
          "answer": "10",
          "isCorrect": false,
          "questionId": 42,
          "createdAt": "2024-07-08T20:42:32.282Z",
          "updatedAt": "2024-07-08T20:42:32.282Z"
        },
        {
          "id": 68,
          "answer": "100",
          "isCorrect": false,
          "questionId": 42,
          "createdAt": "2024-07-08T20:42:32.282Z",
          "updatedAt": "2024-07-08T20:42:32.282Z"
        },
        {
          "id": 69,
          "answer": "30",
          "isCorrect": true,
          "questionId": 42,
          "createdAt": "2024-07-08T20:42:32.283Z",
          "updatedAt": "2024-07-08T20:42:32.283Z"
        }
      ]
    }
  ]
}
```

## DELETE /quiz/quizId

### Request:

```js
fetch(`${API}/quiz/28`, {
  method: "DELETE",
  headers: {
    Authorization: withAuth, //helper
  },
});
```

### Response

```js
{
  "message": "Quiz and its related data deleted successfully"
}
```

## POST /users

### Request:

```js
fetch(`${API}/users`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "Austin Powers",
    email: "austinp@email.com",
    password: "12345678",
  }),
});
```

### Response

```js
{
  "id": 12,
  "username": "Austin Powers",
  "email": "austinp@email.com",
  "password": "$2b$10$ZExsmBQSpmeNNP3RQmAoqe0I.FMkePxngUe50Og6ZCJInYMeDvitq",
  "updatedAt": "2024-07-08T21:06:22.047Z",
  "createdAt": "2024-07-08T21:06:22.047Z"
}
```

## POST /users/login

### Request:

```js
fetch(`${API}/users/login`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "austinp@email.com",
    password: "123",
  }),
});
```

### Response

```js
{
  "user": {
    "id": 12,
    "username": "Austin Powers",
    "email": "austinp@email.com",
    "password": "$2b$10$ZExsmBQSpmeNNP3RQmAoqe0I.FMkePxngUe50Og6ZCJInYMeDvitq",
    "createdAt": "2024-07-08T21:06:22.047Z",
    "updatedAt": "2024-07-08T21:06:22.047Z"
  },
  "message": "You are now logged in!"
}
```

## PUT /users

### Request:

```js
fetch(`${API}/users`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: withAuth, //helper
  },
  body: JSON.stringify({
    username: "Austin P",
    email: "theseductor@email.com",
    password: "88888888",
  }),
});
```

### Response

```js
{
  "message": "User updated successfully",
  "user": {
    "id": 12,
    "username": "Austin P",
    "email": "theseductor@email.com"
  }
}
```

## DELETE /users

### Request:

```js
fetch(`${API}/users`, {
  method: "DELETE",
  headers: {
    Authorization: withAuth, //helper
  },
});
```

### Response

```js
{
  "message": "User and related data deleted successfully"
}
```
