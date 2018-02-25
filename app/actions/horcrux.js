import secrets from 'secrets.js'

export function isNumber(value) {
  var num = Number(value)
  return (!isNaN(num) || num > 0)
}

export function shardSoul (soul, totalHorcrux = 5, minHorcruxToRevive = 3) {
  if (minHorcruxToRevive > totalHorcrux) { return [] }
  const hexKey =  secrets.str2hex(soul)
  const shares = secrets.share(hexKey, Number(totalHorcrux), Number(minHorcruxToRevive))
  return shares
}

export function reviveFromShards (shards) {
  try { var soul = secrets.hex2str(secrets.combine(shards)) }
  catch (err) { var soul = "Seems like you're missing a Horcrux or two..."}
  return soul
}

