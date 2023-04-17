window.jest_html_reporters_callback__({"numFailedTestSuites":1,"numFailedTests":4,"numPassedTestSuites":0,"numPassedTests":2,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":1,"numTotalTests":6,"startTime":1681705162202,"success":false,"testResults":[{"numFailingTests":4,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1681705176396,"runtime":13502,"slow":true,"start":1681705162894},"testFilePath":"F:\\Training\\call-billing\\call-billing\\src\\providers\\mobile.service.spec.ts","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mMobileService › createCall › should throw BadRequestException if user is too long\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mrejects\u001b[2m.\u001b[22mtoThrow\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m)\u001b[22m\n\n    Expected constructor: \u001b[32mBadRequestException\u001b[39m\n    Received constructor: \u001b[31mTypeError\u001b[39m\n\n    Received message: \u001b[31m\"Cannot read properties of undefined (reading 'save')\"\u001b[39m\n\n        \u001b[0m \u001b[90m 31 |\u001b[39m     call\u001b[33m.\u001b[39musername \u001b[33m=\u001b[39m username\u001b[33m;\u001b[39m\u001b[0m\n        \u001b[0m \u001b[90m 32 |\u001b[39m     call\u001b[33m.\u001b[39mduration \u001b[33m=\u001b[39m createCallRequest\u001b[33m.\u001b[39mcall_duration\u001b[33m;\u001b[39m\u001b[0m\n        \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 33 |\u001b[39m     \u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mmobileRepository\u001b[33m.\u001b[39msave(call)\u001b[33m;\u001b[39m\u001b[0m\n        \u001b[0m \u001b[90m    |\u001b[39m                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n        \u001b[0m \u001b[90m 34 |\u001b[39m   }\u001b[0m\n        \u001b[0m \u001b[90m 35 |\u001b[39m\u001b[0m\n        \u001b[0m \u001b[90m 36 |\u001b[39m   \u001b[90m/**\u001b[39m\u001b[0m\n\n          \u001b[2mat Repository.save (\u001b[22mnode_modules/.pnpm/typeorm@0.3.14_pg@8.10.0+ts-node@10.9.1/src/repository/Repository.ts\u001b[2m:205:29)\u001b[22m\n          \u001b[2mat MobileService.createCall (\u001b[22msrc/providers/mobile.service.ts\u001b[2m:33:34)\u001b[22m\n          \u001b[2mat Object.<anonymous> (\u001b[22msrc/providers/mobile.service.spec.ts\u001b[2m:79:23)\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 78 |\u001b[39m       \u001b[36mawait\u001b[39m expect(\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 79 |\u001b[39m         mobileService\u001b[33m.\u001b[39mcreateCall(createCallRequest\u001b[33m.\u001b[39musername\u001b[33m,\u001b[39m createCallRequest)\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 80 |\u001b[39m       )\u001b[33m.\u001b[39mrejects\u001b[33m.\u001b[39mtoThrow(\u001b[33mBadRequestException\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    |\u001b[39m                 \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 81 |\u001b[39m     })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 82 |\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 83 |\u001b[39m     it(\u001b[32m'should throw BadRequestException if call duration is negative'\u001b[39m\u001b[33m,\u001b[39m \u001b[36masync\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.toThrow (\u001b[22m\u001b[2m../node_modules/.pnpm/expect@29.5.0/node_modules/expect/build/index.js\u001b[2m:210:22)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36mproviders/mobile.service.spec.ts\u001b[39m\u001b[0m\u001b[2m:80:17)\u001b[22m\u001b[2m\u001b[22m\n\n\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mMobileService › createCall › should throw BadRequestException if call duration is negative\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mrejects\u001b[2m.\u001b[22mtoThrow\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m)\u001b[22m\n\n    Expected constructor: \u001b[32mBadRequestException\u001b[39m\n    Received constructor: \u001b[31mTypeError\u001b[39m\n\n    Received message: \u001b[31m\"Cannot read properties of undefined (reading 'save')\"\u001b[39m\n\n        \u001b[0m \u001b[90m 31 |\u001b[39m     call\u001b[33m.\u001b[39musername \u001b[33m=\u001b[39m username\u001b[33m;\u001b[39m\u001b[0m\n        \u001b[0m \u001b[90m 32 |\u001b[39m     call\u001b[33m.\u001b[39mduration \u001b[33m=\u001b[39m createCallRequest\u001b[33m.\u001b[39mcall_duration\u001b[33m;\u001b[39m\u001b[0m\n        \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 33 |\u001b[39m     \u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mmobileRepository\u001b[33m.\u001b[39msave(call)\u001b[33m;\u001b[39m\u001b[0m\n        \u001b[0m \u001b[90m    |\u001b[39m                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n        \u001b[0m \u001b[90m 34 |\u001b[39m   }\u001b[0m\n        \u001b[0m \u001b[90m 35 |\u001b[39m\u001b[0m\n        \u001b[0m \u001b[90m 36 |\u001b[39m   \u001b[90m/**\u001b[39m\u001b[0m\n\n          \u001b[2mat Repository.save (\u001b[22mnode_modules/.pnpm/typeorm@0.3.14_pg@8.10.0+ts-node@10.9.1/src/repository/Repository.ts\u001b[2m:205:29)\u001b[22m\n          \u001b[2mat MobileService.createCall (\u001b[22msrc/providers/mobile.service.ts\u001b[2m:33:34)\u001b[22m\n          \u001b[2mat Object.<anonymous> (\u001b[22msrc/providers/mobile.service.spec.ts\u001b[2m:89:23)\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 88 |\u001b[39m       \u001b[36mawait\u001b[39m expect(\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 89 |\u001b[39m         mobileService\u001b[33m.\u001b[39mcreateCall(createCallRequest\u001b[33m.\u001b[39musername\u001b[33m,\u001b[39m createCallRequest)\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 90 |\u001b[39m       )\u001b[33m.\u001b[39mrejects\u001b[33m.\u001b[39mtoThrow(\u001b[33mBadRequestException\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    |\u001b[39m                 \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 91 |\u001b[39m     })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 92 |\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 93 |\u001b[39m     it(\u001b[32m'should throw BadRequestException if call duration is not a number'\u001b[39m\u001b[33m,\u001b[39m \u001b[36masync\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.toThrow (\u001b[22m\u001b[2m../node_modules/.pnpm/expect@29.5.0/node_modules/expect/build/index.js\u001b[2m:210:22)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36mproviders/mobile.service.spec.ts\u001b[39m\u001b[0m\u001b[2m:90:17)\u001b[22m\u001b[2m\u001b[22m\n\n\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mMobileService › createCall › should throw BadRequestException if call duration is not a number\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mrejects\u001b[2m.\u001b[22mtoThrow\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m)\u001b[22m\n\n    Expected constructor: \u001b[32mBadRequestException\u001b[39m\n    Received constructor: \u001b[31mTypeError\u001b[39m\n\n    Received message: \u001b[31m\"Cannot read properties of undefined (reading 'save')\"\u001b[39m\n\n        \u001b[0m \u001b[90m 31 |\u001b[39m     call\u001b[33m.\u001b[39musername \u001b[33m=\u001b[39m username\u001b[33m;\u001b[39m\u001b[0m\n        \u001b[0m \u001b[90m 32 |\u001b[39m     call\u001b[33m.\u001b[39mduration \u001b[33m=\u001b[39m createCallRequest\u001b[33m.\u001b[39mcall_duration\u001b[33m;\u001b[39m\u001b[0m\n        \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 33 |\u001b[39m     \u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mmobileRepository\u001b[33m.\u001b[39msave(call)\u001b[33m;\u001b[39m\u001b[0m\n        \u001b[0m \u001b[90m    |\u001b[39m                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n        \u001b[0m \u001b[90m 34 |\u001b[39m   }\u001b[0m\n        \u001b[0m \u001b[90m 35 |\u001b[39m\u001b[0m\n        \u001b[0m \u001b[90m 36 |\u001b[39m   \u001b[90m/**\u001b[39m\u001b[0m\n\n          \u001b[2mat Repository.save (\u001b[22mnode_modules/.pnpm/typeorm@0.3.14_pg@8.10.0+ts-node@10.9.1/src/repository/Repository.ts\u001b[2m:205:29)\u001b[22m\n          \u001b[2mat MobileService.createCall (\u001b[22msrc/providers/mobile.service.ts\u001b[2m:33:34)\u001b[22m\n          \u001b[2mat Object.<anonymous> (\u001b[22msrc/providers/mobile.service.spec.ts\u001b[2m:99:23)\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m  98 |\u001b[39m       \u001b[36mawait\u001b[39m expect(\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m  99 |\u001b[39m         mobileService\u001b[33m.\u001b[39mcreateCall(createCallRequest\u001b[33m.\u001b[39musername\u001b[33m,\u001b[39m createCallRequest)\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 100 |\u001b[39m       )\u001b[33m.\u001b[39mrejects\u001b[33m.\u001b[39mtoThrow(\u001b[33mBadRequestException\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m     |\u001b[39m                 \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 101 |\u001b[39m     })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 102 |\u001b[39m   })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 103 |\u001b[39m   describe(\u001b[32m'getBilling'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.toThrow (\u001b[22m\u001b[2m../node_modules/.pnpm/expect@29.5.0/node_modules/expect/build/index.js\u001b[2m:210:22)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36mproviders/mobile.service.spec.ts\u001b[39m\u001b[0m\u001b[2m:100:17)\u001b[22m\u001b[2m\u001b[22m\n\n\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mMobileService › getBilling › should return billing response\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\n    Expected: \u001b[32m4\u001b[39m\n    Received: \u001b[31m3500\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 121 |\u001b[39m       expect(billingResponse\u001b[33m.\u001b[39mcallCount)\u001b[33m.\u001b[39mtoBe(mobileCallList\u001b[33m.\u001b[39mlength)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 122 |\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 123 |\u001b[39m       expect(billingResponse\u001b[33m.\u001b[39mblockCount)\u001b[33m.\u001b[39mtoBe(\u001b[35m4\u001b[39m)\u001b[33m;\u001b[39m \u001b[90m// 2 blocks for 60s, 1 block for 30s, and 1 block for 15s\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m     |\u001b[39m                                          \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 124 |\u001b[39m     })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 125 |\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 126 |\u001b[39m     it(\u001b[32m'should throw NoBillingForUserException if no mobile calls found for user'\u001b[39m\u001b[33m,\u001b[39m \u001b[36masync\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36mproviders/mobile.service.spec.ts\u001b[39m\u001b[0m\u001b[2m:123:42)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["MobileService","createCall"],"duration":21,"failureMessages":[],"fullName":"MobileService createCall should create a new call","status":"passed","title":"should create a new call"},{"ancestorTitles":["MobileService","createCall"],"duration":78,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mrejects\u001b[2m.\u001b[22mtoThrow\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m)\u001b[22m\n\nExpected constructor: \u001b[32mBadRequestException\u001b[39m\nReceived constructor: \u001b[31mTypeError\u001b[39m\n\nReceived message: \u001b[31m\"Cannot read properties of undefined (reading 'save')\"\u001b[39m\n\n    \u001b[0m \u001b[90m 31 |\u001b[39m     call\u001b[33m.\u001b[39musername \u001b[33m=\u001b[39m username\u001b[33m;\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m 32 |\u001b[39m     call\u001b[33m.\u001b[39mduration \u001b[33m=\u001b[39m createCallRequest\u001b[33m.\u001b[39mcall_duration\u001b[33m;\u001b[39m\u001b[0m\n    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 33 |\u001b[39m     \u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mmobileRepository\u001b[33m.\u001b[39msave(call)\u001b[33m;\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m    |\u001b[39m                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m 34 |\u001b[39m   }\u001b[0m\n    \u001b[0m \u001b[90m 35 |\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m 36 |\u001b[39m   \u001b[90m/**\u001b[39m\u001b[0m\n\n      \u001b[2mat Repository.save (\u001b[22mnode_modules/.pnpm/typeorm@0.3.14_pg@8.10.0+ts-node@10.9.1/src/repository/Repository.ts\u001b[2m:205:29)\u001b[22m\n      \u001b[2mat MobileService.createCall (\u001b[22msrc/providers/mobile.service.ts\u001b[2m:33:34)\u001b[22m\n      \u001b[2mat Object.<anonymous> (\u001b[22msrc/providers/mobile.service.spec.ts\u001b[2m:79:23)\u001b[22m\n    at Object.toThrow (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\expect@29.5.0\\node_modules\\expect\\build\\index.js:210:22)\n    at Object.<anonymous> (F:\\Training\\call-billing\\call-billing\\src\\providers\\mobile.service.spec.ts:80:17)\n    at Promise.then.completed (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\utils.js:293:28)\n    at new Promise (<anonymous>)\n    at callAsyncCircusFn (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\utils.js:226:10)\n    at _callCircusTest (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\run.js:297:40)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at _runTest (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\run.js:233:3)\n    at _runTestsForDescribeBlock (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\run.js:135:9)\n    at _runTestsForDescribeBlock (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\run.js:130:9)\n    at _runTestsForDescribeBlock (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\run.js:130:9)\n    at run (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\run.js:68:3)\n    at runAndTransformResultsToJestFormat (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\legacy-code-todo-rewrite\\jestAdapterInit.js:122:21)\n    at jestAdapter (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\legacy-code-todo-rewrite\\jestAdapter.js:79:19)\n    at runTestInternal (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-runner@29.5.0\\node_modules\\jest-runner\\build\\runTest.js:367:16)\n    at runTest (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-runner@29.5.0\\node_modules\\jest-runner\\build\\runTest.js:444:34)"],"fullName":"MobileService createCall should throw BadRequestException if user is too long","status":"failed","title":"should throw BadRequestException if user is too long"},{"ancestorTitles":["MobileService","createCall"],"duration":20,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mrejects\u001b[2m.\u001b[22mtoThrow\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m)\u001b[22m\n\nExpected constructor: \u001b[32mBadRequestException\u001b[39m\nReceived constructor: \u001b[31mTypeError\u001b[39m\n\nReceived message: \u001b[31m\"Cannot read properties of undefined (reading 'save')\"\u001b[39m\n\n    \u001b[0m \u001b[90m 31 |\u001b[39m     call\u001b[33m.\u001b[39musername \u001b[33m=\u001b[39m username\u001b[33m;\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m 32 |\u001b[39m     call\u001b[33m.\u001b[39mduration \u001b[33m=\u001b[39m createCallRequest\u001b[33m.\u001b[39mcall_duration\u001b[33m;\u001b[39m\u001b[0m\n    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 33 |\u001b[39m     \u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mmobileRepository\u001b[33m.\u001b[39msave(call)\u001b[33m;\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m    |\u001b[39m                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m 34 |\u001b[39m   }\u001b[0m\n    \u001b[0m \u001b[90m 35 |\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m 36 |\u001b[39m   \u001b[90m/**\u001b[39m\u001b[0m\n\n      \u001b[2mat Repository.save (\u001b[22mnode_modules/.pnpm/typeorm@0.3.14_pg@8.10.0+ts-node@10.9.1/src/repository/Repository.ts\u001b[2m:205:29)\u001b[22m\n      \u001b[2mat MobileService.createCall (\u001b[22msrc/providers/mobile.service.ts\u001b[2m:33:34)\u001b[22m\n      \u001b[2mat Object.<anonymous> (\u001b[22msrc/providers/mobile.service.spec.ts\u001b[2m:89:23)\u001b[22m\n    at Object.toThrow (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\expect@29.5.0\\node_modules\\expect\\build\\index.js:210:22)\n    at Object.<anonymous> (F:\\Training\\call-billing\\call-billing\\src\\providers\\mobile.service.spec.ts:90:17)\n    at Promise.then.completed (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\utils.js:293:28)\n    at new Promise (<anonymous>)\n    at callAsyncCircusFn (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\utils.js:226:10)\n    at _callCircusTest (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\run.js:297:40)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at _runTest (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\run.js:233:3)\n    at _runTestsForDescribeBlock (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\run.js:135:9)\n    at _runTestsForDescribeBlock (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\run.js:130:9)\n    at _runTestsForDescribeBlock (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\run.js:130:9)\n    at run (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\run.js:68:3)\n    at runAndTransformResultsToJestFormat (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\legacy-code-todo-rewrite\\jestAdapterInit.js:122:21)\n    at jestAdapter (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\legacy-code-todo-rewrite\\jestAdapter.js:79:19)\n    at runTestInternal (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-runner@29.5.0\\node_modules\\jest-runner\\build\\runTest.js:367:16)\n    at runTest (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-runner@29.5.0\\node_modules\\jest-runner\\build\\runTest.js:444:34)"],"fullName":"MobileService createCall should throw BadRequestException if call duration is negative","status":"failed","title":"should throw BadRequestException if call duration is negative"},{"ancestorTitles":["MobileService","createCall"],"duration":13,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mrejects\u001b[2m.\u001b[22mtoThrow\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m)\u001b[22m\n\nExpected constructor: \u001b[32mBadRequestException\u001b[39m\nReceived constructor: \u001b[31mTypeError\u001b[39m\n\nReceived message: \u001b[31m\"Cannot read properties of undefined (reading 'save')\"\u001b[39m\n\n    \u001b[0m \u001b[90m 31 |\u001b[39m     call\u001b[33m.\u001b[39musername \u001b[33m=\u001b[39m username\u001b[33m;\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m 32 |\u001b[39m     call\u001b[33m.\u001b[39mduration \u001b[33m=\u001b[39m createCallRequest\u001b[33m.\u001b[39mcall_duration\u001b[33m;\u001b[39m\u001b[0m\n    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 33 |\u001b[39m     \u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mmobileRepository\u001b[33m.\u001b[39msave(call)\u001b[33m;\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m    |\u001b[39m                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m 34 |\u001b[39m   }\u001b[0m\n    \u001b[0m \u001b[90m 35 |\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m 36 |\u001b[39m   \u001b[90m/**\u001b[39m\u001b[0m\n\n      \u001b[2mat Repository.save (\u001b[22mnode_modules/.pnpm/typeorm@0.3.14_pg@8.10.0+ts-node@10.9.1/src/repository/Repository.ts\u001b[2m:205:29)\u001b[22m\n      \u001b[2mat MobileService.createCall (\u001b[22msrc/providers/mobile.service.ts\u001b[2m:33:34)\u001b[22m\n      \u001b[2mat Object.<anonymous> (\u001b[22msrc/providers/mobile.service.spec.ts\u001b[2m:99:23)\u001b[22m\n    at Object.toThrow (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\expect@29.5.0\\node_modules\\expect\\build\\index.js:210:22)\n    at Object.<anonymous> (F:\\Training\\call-billing\\call-billing\\src\\providers\\mobile.service.spec.ts:100:17)\n    at Promise.then.completed (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\utils.js:293:28)\n    at new Promise (<anonymous>)\n    at callAsyncCircusFn (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\utils.js:226:10)\n    at _callCircusTest (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\run.js:297:40)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at _runTest (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\run.js:233:3)\n    at _runTestsForDescribeBlock (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\run.js:135:9)\n    at _runTestsForDescribeBlock (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\run.js:130:9)\n    at _runTestsForDescribeBlock (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\run.js:130:9)\n    at run (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\run.js:68:3)\n    at runAndTransformResultsToJestFormat (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\legacy-code-todo-rewrite\\jestAdapterInit.js:122:21)\n    at jestAdapter (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-circus@29.5.0\\node_modules\\jest-circus\\build\\legacy-code-todo-rewrite\\jestAdapter.js:79:19)\n    at runTestInternal (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-runner@29.5.0\\node_modules\\jest-runner\\build\\runTest.js:367:16)\n    at runTest (F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-runner@29.5.0\\node_modules\\jest-runner\\build\\runTest.js:444:34)"],"fullName":"MobileService createCall should throw BadRequestException if call duration is not a number","status":"failed","title":"should throw BadRequestException if call duration is not a number"},{"ancestorTitles":["MobileService","getBilling"],"duration":17,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\nExpected: \u001b[32m4\u001b[39m\nReceived: \u001b[31m3500\u001b[39m\n    at Object.<anonymous> (F:\\Training\\call-billing\\call-billing\\src\\providers\\mobile.service.spec.ts:123:42)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"],"fullName":"MobileService getBilling should return billing response","status":"failed","title":"should return billing response"},{"ancestorTitles":["MobileService","getBilling"],"duration":4,"failureMessages":[],"fullName":"MobileService getBilling should throw NoBillingForUserException if no mobile calls found for user","status":"passed","title":"should throw NoBillingForUserException if no mobile calls found for user"}]}],"config":{"bail":0,"changedFilesWithAncestor":false,"ci":false,"collectCoverage":false,"collectCoverageFrom":["**/*.(t|j)s"],"coverageDirectory":"F:\\Training\\call-billing\\call-billing\\coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":3,"noStackTrace":false,"nonFlagArgs":[],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"openHandlesTimeout":1000,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\jest-html-reporters@3.1.4\\node_modules\\jest-html-reporters\\index.js",{"publicPath":"./html-report","filename":"report.html","openReport":true}]],"rootDir":"F:\\Training\\call-billing\\call-billing\\src","runTestsByPath":false,"seed":1770879960,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"","testSequencer":"F:\\Training\\call-billing\\call-billing\\node_modules\\.pnpm\\@jest+test-sequencer@29.5.0\\node_modules\\@jest\\test-sequencer\\build\\index.js","updateSnapshot":"new","useStderr":false,"verbose":true,"watch":false,"watchAll":false,"watchman":true,"workerThreads":false},"endTime":1681705177182,"_reporterOptions":{"publicPath":"./html-report","filename":"report.html","expand":false,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":true,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false},"logInfoMapping":{},"attachInfos":{}})