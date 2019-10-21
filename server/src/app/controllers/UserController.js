import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(6)
        .required(),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'Validation fails', messages: error.inner });
    }

    /*
     * check if email is already used
     */
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      return res
        .status(400)
        .json({ error: 'Bad Request', messages: ['Email not available'] });
    }

    const { id, name, email } = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    return res.json({ id, name, email });
  }
}

export default new UserController();
