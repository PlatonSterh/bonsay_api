import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Client } from 'src/clients/entities/client.entity';
import { Order } from 'src/orders/entities/order.entity';

@Entity({ name: 'addresses' })
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  house: string;

  @Column()
  postcode: string;

  @ManyToOne(() => Client, (client) => client.addresses)
  client: Client;

  @Column()
  clientId?: number;

  @ManyToOne(() => Order, (order) => order.addressId)
  orders: Order[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
