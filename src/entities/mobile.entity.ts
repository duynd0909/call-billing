import { Column, Entity, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('mobile')
export class Mobile {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
  id!: number;

  @Index()
  @Column('varchar', { nullable: false, length: 32, default: 'test-user' })
  username!: string;

  @Column()
  duration: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
