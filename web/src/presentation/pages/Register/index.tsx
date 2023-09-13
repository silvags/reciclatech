import { Logo } from '@/presentation/components/Logo'
import { Input } from '@/presentation/components/Input'
import classes from './style.module.scss'
import { FaUserAlt, FaFingerprint, FaLock } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { Button } from '@/presentation/components/Button'

export function RegisterPage() {
  return (
    <section className={classes.section_style}>
      <Logo />
      <h2>Cadastro</h2>
      <form>
        <Input
          icon={(<FaUserAlt />)}
          placeholder='Nome completo'
        />
        <Input
          icon={(<MdAlternateEmail />)}
          placeholder='E-mail'
        />
        <div>
          <Input
            icon={(<FaFingerprint />)}
            css={{ width: '50vw' }}
            placeholder='CPF'
          />
          <Input
            css={{ width: '38vw' }}
            placeholder='DD/MM/AAAA'
          />
        </div>
        <Input
          icon={(<FaLock />)}
          placeholder='Senha'
        />
        <Input
          icon={(<FaLock />)}
          placeholder='Confirme sua senha'
        />
        <div>
          <input type="checkbox" id="privacy_policy" name="privacy_policy" />
          <label htmlFor="privacy_policy">Eu li e concordo com a política de privacidade e segurança</label>
        </div>
        <Button asChild>
          <button type="submit">Cadastrar</button>
        </Button>
      </form>
    </section>
  )
}