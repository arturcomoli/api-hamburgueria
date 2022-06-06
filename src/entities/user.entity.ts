import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Request } from './requests.entity'

@Entity()
export class User {
  @PrimaryColumn('uuid')
  readonly id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  } 
}
