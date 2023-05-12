import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentsService {
  constructor(@InjectModel(Payment) private paymentRepo: typeof Payment) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const candidate = await this.paymentRepo.findOne({
      where: {
        payment_date: createPaymentDto.payment_date,
        group_id: createPaymentDto.group_id,
        student_id: createPaymentDto.student_id,
      },
    });
    if (candidate) {
      throw new BadRequestException(
        'This payment with this date already exists',
      );
    }
    const newPayment = await this.paymentRepo.create(createPaymentDto);
    return newPayment;
  }

  async findAll() {
    const payments = await this.paymentRepo.findAll();
    return payments;
  }

  async findOne(id: number) {
    const payment = await this.paymentRepo.findOne({ where: { id } });
    if (!payment) {
      throw new BadRequestException('Payment not found');
    }
    return payment;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const payment = await this.findOne(id);

    if (
      updatePaymentDto.payment_date ||
      updatePaymentDto.group_id ||
      updatePaymentDto.student_id
    ) {
      const candidate = await this.paymentRepo.findOne({
        where: {
          payment_date: updatePaymentDto.payment_date || payment.payment_date,
          group_id: updatePaymentDto.group_id || payment.group_id,
          student_id: updatePaymentDto.student_id || payment.student_id,
        },
      });
      if (candidate && candidate.id !== id) {
        throw new BadRequestException(
          'This payment with this date already exists',
        );
      }
    }
    await payment.update(updatePaymentDto);
    return payment;
  }

  async remove(id: number) {
    const payment = await this.findOne(id);
    await payment.destroy();
    return { message: 'payment deleted' };
  }

  async paginate(page: number) {
    const groups = await this.paymentRepo.findAll({
      order: [['createdAt', 'DESC']],
      limit: 10,
      offset: (page - 1) * 10,
    });
    return groups;
  }
}
