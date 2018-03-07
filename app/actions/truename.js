import secrets from 'secrets.js'

export function isNumber(value) {
  var num = Number(value)
  return (!isNaN(num) || num > 0)
}

export function splitTrueName (trueName, pieces = 5, minPieces = 3) {
  if (minPieces > pieces) { return [] }
  const hexKey = secrets.str2hex(trueName)
  const namePieces = secrets.share(hexKey, Number(pieces), Number(minPieces))
  return namePieces
}

export function assembleTrueName (pieces) {
  try { var trueName = secrets.hex2str(secrets.combine(pieces)) }
  catch (err) { var trueName = "Nope... bad guess" }
  return trueName
}

