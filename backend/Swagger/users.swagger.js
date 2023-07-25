// boards.swagger.js

/**
 * @swagger
 * /users:
 *   get:
 *     summary: 게시글 가져오기
 *     tags: [Board]
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
 *                   phone:
 *                     type: int
 *                     example: 1
 *                   email:
 *                     type: string
 *                     example: aaa@gmail.com
 *                   name:
 *                     type: string
 *                     example: 철수 
 *                   phone:
 *                     type: string
 *                     example: 010-1234-5678
 *  *                personal:
 *                     type: string
 *                     example: 220110-2222222
 *  *                prefer:
 *                     type: string
 *                     example: https://naver.com
 */
