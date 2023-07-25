
/**
 * @swagger
 * /starbucks:
 *   get:
 *     summary: 게시글 가져오기
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
 *                     example: americano
 *                   kcal:
 *                     type: int
 *                     example: 1
 */


