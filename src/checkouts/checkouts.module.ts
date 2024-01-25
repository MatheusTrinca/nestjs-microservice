import { Module } from '@nestjs/common';
import { CheckoutsService } from './checkouts.service';
import { CheckoutsController } from './checkouts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Checkout } from './entities/checkout.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Checkout])],
  controllers: [CheckoutsController],
  providers: [CheckoutsService],
})
export class CheckoutsModule {}
