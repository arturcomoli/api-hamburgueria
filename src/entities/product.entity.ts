import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity()
export class Product {
  @PrimaryColumn('uuid')
  readonly id: string

  @Column()
  name: string

  @Column()
  category: string

  @Column('float')
  price: number

  @Column()
  img: string

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
