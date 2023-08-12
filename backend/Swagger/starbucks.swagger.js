/**
 * @swagger
 * /starbucks:
 *   get:
 *     summary: get meun
 *     tags: [starbucks]
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
 *                     example: BatchBrew
 *                   kcal:
 *                     type: int
 *                     example: 10
 *                   url:
 *                     type: string
 *                     example: BatchBrew.png
 */
