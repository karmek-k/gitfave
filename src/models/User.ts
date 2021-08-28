import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class {
  @PrimaryColumn()
  id!: number;
}
