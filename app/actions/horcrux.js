import secrets from 'secrets.js'

export function isNumber(value) {
  var num = Number(value)
  return (!isNaN(num) || num > 0)
}

export function shardHorcrux (soul, totalHorcrux = 5, minHorcruxToRevive = 3) {
  const hexKey =  secrets.str2hex(soul)
  const shares = secrets.share( hexKey, Number(totalHorcrux), Number(minHorcruxToRevive))

  return shares
}

export function reviveFromShards (shards) {

}

