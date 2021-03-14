import { Field, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true, type: 'text' })
  username: string;

  @Field()
  @Column({ unique: true, type: 'text' })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @Field()
  @Column({ default: new Date() })
  createdAt: Date;

  @Field()
  @Column({ default: new Date() })
  updatedAt: Date;
}
