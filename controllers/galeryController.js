import { galery } from '../database/db.js';

const galeryController = {
  addGalery: async (req, res) => {
    try {
      const data = req.body;
      const newGalery = await galery.create(data);
      res.json({
        status: 'success',
        data: newGalery,
      });
    } catch (error) {
      res.json({
        status: 'error',
        message: error.message,
      });
    }
  },
  // getTeam: async (req, res) => {
  //   try {
  //     const teams = await premierleague.findAll();
  //     res.json({
  //       status: 'success',
  //       statusCode: 200,
  //       message: 'Success get all teams',
  //       data: teams,
  //     });
  //   } catch (err) {
  //     res.status(500).json({
  //       status: 'error',
  //       statusCode: 500,
  //       message: err,
  //     });
  //   }
  // },
  // getTeamById: async (req, res) => {
  //   try {
  //     const findTeam = await premierleague.findByPk(req.params.id);
  //     if (findTeam) {
  //       res.json({
  //         status: 'success',
  //         statusCode: 200,
  //         message: 'Success get team by id',
  //         data: findTeam,
  //       });
  //     } else {
  //       res.json({
  //         status: 'Error',
  //         statusCode: 400,
  //         message: 'team not found',
  //       });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json({
  //       status: 'error test',
  //       statusCode: 500,
  //       message: err,
  //     });
  //   }
  // },
  // updateTeam: async (req, res) => {
  //   try {
  //     const updateTeam = await premierleague.update(req.body, {
  //       where: {
  //         id: req.params.id,
  //       },
  //     });
  //     if (updateTeam[0] === 0) {
  //       res.json({
  //         status: 'error',
  //         statusCode: 400,
  //         message: 'Team not found',
  //       });
  //     } else {
  //       res.json({
  //         status: 'success',
  //         statusCode: 200,
  //         message: 'Success update team',
  //         data: req.body,
  //       });
  //     }
  //   } catch (err) {
  //     res.status(500).json({
  //       status: 'error',
  //       statusCode: 500,
  //       message: err,
  //     });
  //   }
  // },
  // deleteTeam: async (req, res) => {
  //   try {
  //     const deleteTeam = await premierleague.destroy({
  //       where: {
  //         id: req.params.id,
  //       },
  //     });
  //     if (deleteTeam === 0) {
  //       res.json({
  //         status: 'error',
  //         statusCode: 400,
  //         message: 'Team not found',
  //       });
  //     } else {
  //       res.json({
  //         status: 'success',
  //         statusCode: 200,
  //         message: 'Success delete team',
  //       });
  //     }
  //   } catch (err) {
  //     res.status(500).json({
  //       status: 'error',
  //       statusCode: 500,
  //       message: err,
  //     });
  //   }
  // },
};

export default galeryController;