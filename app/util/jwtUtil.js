'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const JWT = require('jsonwebtoken');
const reply_1 = require("../const/reply");
class JWTUtil {
    static verify(token) {
        //const SECRET_KEY = 'd90289cc2e92c046b5f15f9a6ef747b9';
        const SECRET_KEY = 'utwi57prx4yfgl12o0snmaq9h3vbjckz';
        return new Promise((resolve, reject) => {
            JWT.verify(token, SECRET_KEY, function (err, decode) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(decode);
                }
            });
        }).then((decode) => {
            console.log('decode=>', decode);
            const result = {
                code: 0,
                uid: decode.uid,
                shortId: decode.shortId,
            };
            return result;
        }).catch((err) => {
            if (err.name == 'TokenExpiredError') {
                return reply_1.default.err('1', 'token过了有效期');
            }
            else if (err.name == 'JsonWebTokenError') {
                return reply_1.default.err('1', '无效的token');
            }
        });
    }
    static sign(uid, shortId) {
        //const SECRET_KEY = 'd90289cc2e92c046b5f15f9a6ef747b9';
        const SECRET_KEY = 'utwi57prx4yfgl12o0snmaq9h3vbjckz';
        return JWT.sign({ uid: uid, shortId: shortId }, SECRET_KEY);
    }
    static signWithTime(uid, shortId) {
        //const SECRET_KEY = 'd90289cc2e92c046b5f15f9a6ef747b9';
        const SECRET_KEY = 'utwi57prx4yfgl12o0snmaq9h3vbjckz';
        return JWT.sign({ uid: uid, shortId: shortId }, SECRET_KEY, { expiresIn: 60 * 60 * 24 * 30 });
    }
}
exports.default = JWTUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0VXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImp3dFV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBRSxjQUFjLENBQUMsQ0FBQztBQUNyQywwQ0FBbUM7QUFFbkM7SUFFVyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQVk7UUFDN0Isd0RBQXdEO1FBQ3hELE1BQU0sVUFBVSxHQUFHLGtDQUFrQyxDQUFDO1FBRXRELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNuQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsVUFBVSxHQUFHLEVBQUUsTUFBTTtnQkFDL0MsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFVLEVBQUMsRUFBRTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixNQUFNLE1BQU0sR0FBRztnQkFDWCxJQUFJLEVBQUMsQ0FBQztnQkFDTixHQUFHLEVBQUMsTUFBTSxDQUFDLEdBQUc7Z0JBQ2QsT0FBTyxFQUFDLE1BQU0sQ0FBQyxPQUFPO2FBQ3pCLENBQUE7WUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQU8sRUFBQyxFQUFFO1lBQ2hCLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksbUJBQW1CLENBQUMsQ0FBQSxDQUFDO2dCQUNoQyxNQUFNLENBQUMsZUFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsWUFBWSxDQUFDLENBQUE7WUFDdEMsQ0FBQztZQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLG1CQUFtQixDQUFDLENBQUEsQ0FBQztnQkFDdEMsTUFBTSxDQUFDLGVBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3BDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQVUsRUFBQyxPQUFjO1FBQ3hDLHdEQUF3RDtRQUN4RCxNQUFNLFVBQVUsR0FBRyxrQ0FBa0MsQ0FBQztRQUN0RCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQVUsRUFBQyxPQUFjO1FBQ2hELHdEQUF3RDtRQUN4RCxNQUFNLFVBQVUsR0FBRyxrQ0FBa0MsQ0FBQztRQUN0RCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9GLENBQUM7Q0FFSjtBQTNDRCwwQkEyQ0MifQ==