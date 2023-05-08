import {
  ArgumentsHost,
  Catch,
  HttpException,
  HttpServer,
  HttpStatus,
} from '@nestjs/common';
import { APP_FILTER, BaseExceptionFilter, HttpAdapterHost } from '@nestjs/core';
import { Prisma } from '@prisma/client';

export type ErrorCodesStatusMapping = {
  [key: string]: number;
};

@Catch(Prisma?.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  private errorCodesStatusMapping: ErrorCodesStatusMapping = {
    P2000: HttpStatus.BAD_REQUEST,
    P2002: HttpStatus.CONFLICT,
    P2025: HttpStatus.NOT_FOUND,
  };

  /**
   * @param applicationRef
   * @param errorCodesStatusMapping
   */
  constructor(
    applicationRef?: HttpServer,
    errorCodesStatusMapping: ErrorCodesStatusMapping | null = null,
  ) {
    super(applicationRef);

    if (errorCodesStatusMapping) {
      this.errorCodesStatusMapping = Object.assign(
        this.errorCodesStatusMapping,
        errorCodesStatusMapping,
      );
    }
  }

  /**
   * @param exception
   * @param host
   * @returns
   */
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    return this.catchClientKnownRequestError(exception, host);
  }

  private catchClientKnownRequestError(
    exception: Prisma.PrismaClientKnownRequestError,
    host: ArgumentsHost,
  ) {
    const statusCode = this.errorCodesStatusMapping[exception.code];
    const message =
      `[${exception.code}]: ` + this.exceptionShortMessage(exception.message);

    if (!Object.keys(this.errorCodesStatusMapping).includes(exception.code)) {
      return super.catch(exception, host);
    }

    super.catch(new HttpException({ statusCode, message }, statusCode), host);
  }

  private exceptionShortMessage(message: string): string {
    const shortMessage = message.substring(message.indexOf('→'));
    return shortMessage
      .substring(shortMessage.indexOf('\n'))
      .replace(/\n/g, '')
      .trim();
  }
}

export function providePrismaClientExceptionFilter(
  errorCodesStatusMapping?: ErrorCodesStatusMapping,
) {
  return {
    provide: APP_FILTER,
    useFactory: ({ httpAdapter }: HttpAdapterHost) => {
      return new PrismaClientExceptionFilter(
        httpAdapter,
        errorCodesStatusMapping,
      );
    },
    inject: [HttpAdapterHost],
  };
}
