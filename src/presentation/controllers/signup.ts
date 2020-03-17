import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../erros/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignupController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']
    for (const element of requiredFields) {
      if (!httpRequest.body[element]) {
        return badRequest(new MissingParamError(element))
      }
    }
  }
}
