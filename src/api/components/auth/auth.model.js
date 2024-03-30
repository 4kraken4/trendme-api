class AuthRequest {
  constructor({ username, password }) {
    this.username = username
    this.password = password
  }

  static fromRequest(request) {
    return new AuthModel(request)
  }
}

class AuthResponse {
  constructor({ accessToken, refreshToken }) {
    this.token = accessToken
    this.refreshToken = refreshToken
  }

  static fromResponse(response) {
    return new AuthResponse(response)
  }
}

class RegisterRequest {
  constructor({ username, password }) {
    this.username = username
    this.password = password
  }

  static fromRequest(request) {
    return new RegisterRequest(request)
  }
}

export { AuthRequest, AuthResponse, RegisterRequest }
