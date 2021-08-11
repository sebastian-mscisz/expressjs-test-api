export default {
  port: 1337,
  host: "localhost",
  dbUri: "mongodb://localhost:27017/rest-api",
  saltWorkFactor: 10,
  accessTokenTTL: "15m",
  refreshTokenTTL: "1y",
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
  MIICXAIBAAKBgQCicloPEIOXbrikRSu0VhioB/0l04Evx2lhKoCweFqMtL+xVWYQ
  zfT6x5hyajSvpsGQKxLT6Wtez6ztV9+q1VNkrqiI4Wrr/Z6nvvo1WIEasx9Ij17I
  m3KnXGAdK4SFl6+ErA1ccG6vcxVtiGHig7SMvYBWkYV1ImQoyAhYs84BCwIDAQAB
  AoGAETCWlReDRUgDI+bp7AhcTZOi1xjdh8fLP+v2eDYUJuWNj19hEJAqx0rNt/XD
  I3865l2YfXIq2XqSav8sfPBcBZUXQxbJXuxE4QC8ZwMIR0jdYs+8IOooPt47tPIH
  9tFchxY+FbNliAslHz7OqCKsYvHnLr9qa76KQB8vz2vIvVkCQQDgQKIvuAfeAY9F
  QBmrGeX9pm10s+TsyLWR+2YBBbE1W06//KpS7iUPNujB5lWADGvg+Tr7BOWbqaXR
  HQyXvV8nAkEAuXHAJ2a1/njV+GbNVFGGitktTsF0904Z3JuZrmSpvHXvBLeynUDr
  0ZJ2AyLikbhie/SbsexYHpgCYE/K0Gv9fQJAC2zfloTOyc3UidexNxlzsU+oZfjA
  Yhv7vDtNwCGVHL3RLlDmMKF3e+X1R+O/WW3IlUa9bYqbVCn5i8TqHlUEowJAKjQk
  GhN7Cc3wTFcBFdZz+zeP4yON/hZtNlLHN/Q62OQyIG26HaW/xXNCnlYbIDTJXRJ/
  OI/kQhowOEEQlDxvdQJBAL0ZaCadMaptwqBvEh6OJT+TMmq6RX3wFjRetmr0wE7x
  7pRl4QO2rNRp2iLx/OJAVz2v75fO31mpWkhqtZ9OtIc=
  -----END RSA PRIVATE KEY-----`,
};
