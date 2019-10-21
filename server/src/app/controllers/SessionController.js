import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';

import User from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'Validation fails', messages: error.inner });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    /*
     * check if user exists
     */
    if (!user) {
      return res
        .status(404)
        .json({ error: 'Not Found', messages: ['User not found'] });
    }

    if (!(await user.checkPassword(password))) {
      return res
        .status(400)
        .json({ error: 'Bad Request', messages: ['Password does not match'] });
    }

    const { id, name } = user;

    return res.json({
      user: { id, name, email },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
