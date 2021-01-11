class IndexController {
  async index(req, res) {
    return res.status(200).json({ mesage: 'Inicio' });
  }
}

export default new IndexController();
