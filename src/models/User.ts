import { BaseEntity, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import RepoGroup from './RepoGroup';

@Entity()
class User extends BaseEntity {
  @PrimaryColumn()
  id!: number;

  @OneToMany(() => RepoGroup, rg => rg.user)
  groups!: RepoGroup[];
}

export default User;
