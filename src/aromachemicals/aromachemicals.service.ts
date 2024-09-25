import { Injectable } from '@nestjs/common';
import { CreateAromachemicalDto } from './dto/create-aromachemical.dto';
import { UpdateAromachemicalDto } from './dto/update-aromachemical.dto';

@Injectable()
export class AromachemicalsService {
  create(createAromachemicalDto: CreateAromachemicalDto) {
    return 'This action adds a new aromachemical';
  }

  findAll() {
    return `This action returns all aromachemicals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aromachemical`;
  }

  update(id: number, updateAromachemicalDto: UpdateAromachemicalDto) {
    return `This action updates a #${id} aromachemical`;
  }

  remove(id: number) {
    return `This action removes a #${id} aromachemical`;
  }
}
