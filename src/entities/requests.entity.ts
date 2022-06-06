import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Product } from './product.entity'

@Entity()
export class Request {
    @PrimaryColumn('uuid')
    readonly id: string

    @Column('timestamp')
    date: Date

    @Column('float')
    subtotal: number

    @ManyToMany(type => Product, {
        eager: true,
    }) @JoinTable()
    products: Product[]

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}