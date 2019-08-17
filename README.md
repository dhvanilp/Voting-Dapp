# code.fun.do


The entire voting system made simple


(Rough thought put in words)


```
                                           Registration
                Voter (before Reg) ----------------------------> SYSTEM (the blockchain system--probably with other things)
                                   <---------------------------- / \
                                     Special Key link to BlkCh    |
                                                                  |
                                                                  |
                Voter (after Reg, during vote) -------------------- Uses the key to auth (with 2fa like fingerprint)

                                                                  |                     
                                                                  |
                                                                  |
                                                                  |
                                                                  \/
                                                              VOTE COUNT
                                                              
```

### Points favouring idea :

0. Easy registering with the voting system.
1. No need of maintaining a separate voting list, verifying auth key is sufficient.
2. Live vote count is possible as the vote is instantly updated in the system.
3. No need of long counting procedures as the vote is updated instantly.
4. No problems of auth failures as the BlockChain system is secure and provides access only to the unique key of the user + 2fa with fingerprint.
5. Problems of crooked govt. denying voters to vote with faulty voters list is removed as there is no need of pre-processing.

### Running the project

- Make sure you have Ganche running on port 7545
- Have metamast setup


#### In the project root:

- ```npm install -g truffle ```
- ```npm install ```
- ```truffle migrate --reset```

To vote : https://dhvanilp.github.io/code.fun.do/  (Allow to share address in metamask)