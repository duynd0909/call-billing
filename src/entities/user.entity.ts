import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Call } from '@/entities/call.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
  id!: number;

  @Column('varchar', { nullable: false, length: 255, name: 'title' })
  username!: string;

  @OneToMany(() => Call, (call) => call.user)
  calls: Call[];
}
