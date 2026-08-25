import type { Slug } from "./value-objects/slug.js"
import { Entity } from "../../core/entities/entity.js"
import type { UniqueEntityID } from "../../core/entities/unique-entity-id.js"
import type { Opitional } from "../../core/types/opitional.js"

interface QuestionProps {
    authorId: UniqueEntityID
    bestAnswerdId?: UniqueEntityID
    title: string
    content: string
    slug: Slug
    createdAt: Date
    updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
    static create(
        props: Opitional<QuestionProps,'createdAt'>,
        id?: UniqueEntityID
    ) {
        const question = new Question({
            ...props,
            createdAt: new Date()
        }, id)

        return question
    }
}
