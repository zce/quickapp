import test from 'ava'
import quickapp from '..'

test('<test-title>', t => {
  const err = t.throws(() => quickapp(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(quickapp('w'), 'w@zce.me')
  t.is(quickapp('w', { host: 'wedn.net' }), 'w@wedn.net')
})
