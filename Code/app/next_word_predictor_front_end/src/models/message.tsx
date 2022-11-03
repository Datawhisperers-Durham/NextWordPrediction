type User = {
    name: string
    avtar: string
}

type Message = {
    message: string
    user: User
}

export type { Message, User }