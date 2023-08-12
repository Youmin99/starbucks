/**
 * @swagger
 * /users:
 *   post:
 *     summary: user registration
 *     tags: [users]
 *     parameters:
 *       - in: formData
 *         name: name
 *         type: string
 *         description: A user's name.
 *       - in: formData
 *         name: email
 *         type: string
 *         description: A user's email.
 *       - in: formData
 *         name: prefer
 *         type: string
 *         description: A user's prefer website.
 *       - in: formData
 *         name: pwd
 *         type: string
 *         description: A user's pwd.
 *       - in: formData
 *         name: phone
 *         type: string
 *         description: A user's phone.
 *     responses:
 *       200:
 *         description: Registration completed!!!
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: user description
 *     tags: [users]
 *     parameters:
 *       - in: query
 *         name: number
 *         type: int
 *     responses:
 *       200:
 *         description: success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: user
 *                   email:
 *                     type: string
 *                     example: aaaa@gmail.com
 *                   prefer:
 *                     type: string
 *                     example: google.com
 *                   pwd:
 *                     type: string
 *                     example: 0000
 *                   phone:
 *                     type: string
 *                     example: +1 111-111-1111
 *                   og:
 *                     type: array
 *                     items:
 *                       properties:
 *                         title:
 *                           type: string
 *                         description:
 *                           type: string
 *                         image:
 *                           type: string
 *                       example:
 *                         title:  google
 *                         description: google is search website
 *                         image: aa.png
 *
 */
