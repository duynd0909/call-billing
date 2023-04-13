import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Index,
  ManyToOne,
} from 'typeorm';
import { User } from '@/entities/user.entity';
@Entity('call')
export class Call {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
  id!: number;

  @Index()
  @Column()
  userid!: number;

  @Column()
  duration: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.calls)
  user: User;
}
