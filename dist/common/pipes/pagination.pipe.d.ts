import { PipeTransform } from '@nestjs/common';
import { PaginationInterface } from '../interfaces';
export declare class PaginationPipe implements PipeTransform {
    transform(value: PaginationInterface): PaginationInterface;
}
