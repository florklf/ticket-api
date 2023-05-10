import { Request } from 'express';
import { Scope } from '@nestjs/common';
import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import * as Sentry from '@sentry/node';
import { Span, SpanContext } from '@sentry/types';

@Injectable({ scope: Scope.REQUEST })
export class SentryService {
  get span(): Span {
    return Sentry.getCurrentHub().getScope().getSpan();
  }

  /**
   * When injecting the service it will create the main transaction
   *
   * @param request
   */
  constructor(@Inject(REQUEST) private request: Request) {
    const { method, headers, url } = this.request;

    const transaction = Sentry.startTransaction({
      name: `Route: ${method} ${url}`,
      op: 'transaction',
    });

    Sentry.getCurrentHub().configureScope((scope) => {
      scope.setSpan(transaction);

      scope.setContext('http', {
        method,
        url,
        headers,
      });
    });
  }

  /**
   * Start a new child span in the current span
   *
   * @param spanContext
   */
  startChild(spanContext: SpanContext) {
    return this.span.startChild(spanContext);
  }
}
