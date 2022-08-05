import {Combo} from '../combo/Combo';
import {Cards} from '../card/Cards';
import {Hand} from './Hand';

export const Hands = {
  pAA: new Hand(
    'AAp',
    new Combo(Cards.sA, Cards.cA),
    new Combo(Cards.sA, Cards.hA),
    new Combo(Cards.sA, Cards.dA),
    new Combo(Cards.cA, Cards.hA),
    new Combo(Cards.cA, Cards.dA),
    new Combo(Cards.hA, Cards.dA)
  ),

  sAK: new Hand(
    'AKs',
    new Combo(Cards.sA, Cards.sK),
    new Combo(Cards.hA, Cards.hK),
    new Combo(Cards.cA, Cards.cK),
    new Combo(Cards.dA, Cards.dK)
  ),

  sAQ: new Hand(
    'AQs',
    new Combo(Cards.sA, Cards.sQ),
    new Combo(Cards.hA, Cards.hQ),
    new Combo(Cards.cA, Cards.cQ),
    new Combo(Cards.dA, Cards.dQ)
  ),

  sAJ: new Hand(
    'AJs',
    new Combo(Cards.sA, Cards.sJ),
    new Combo(Cards.hA, Cards.hJ),
    new Combo(Cards.cA, Cards.cJ),
    new Combo(Cards.dA, Cards.dJ)
  ),

  sAT: new Hand(
    'ATs',
    new Combo(Cards.sA, Cards.sT),
    new Combo(Cards.hA, Cards.hT),
    new Combo(Cards.cA, Cards.cT),
    new Combo(Cards.dA, Cards.dT)
  ),

  sA9: new Hand(
    'A9s',
    new Combo(Cards.sA, Cards.s9),
    new Combo(Cards.hA, Cards.h9),
    new Combo(Cards.cA, Cards.c9),
    new Combo(Cards.dA, Cards.d9),
  ),

  sA8: new Hand(
    'A8s',
    new Combo(Cards.sA, Cards.s8),
    new Combo(Cards.hA, Cards.h8),
    new Combo(Cards.cA, Cards.c8),
    new Combo(Cards.dA, Cards.d8)
  ),

  sA7: new Hand(
    'A7s',
    new Combo(Cards.sA, Cards.s7),
    new Combo(Cards.hA, Cards.h7),
    new Combo(Cards.cA, Cards.c7),
    new Combo(Cards.dA, Cards.d7),
  ),

  sA6: new Hand(
    'A6s',
    new Combo(Cards.sA, Cards.s6),
    new Combo(Cards.hA, Cards.h6),
    new Combo(Cards.cA, Cards.c6),
    new Combo(Cards.dA, Cards.d6)
  ),

  sA5: new Hand(
    'A5s',
    new Combo(Cards.sA, Cards.s5),
    new Combo(Cards.hA, Cards.h5),
    new Combo(Cards.cA, Cards.c5),
    new Combo(Cards.dA, Cards.d5)
  ),

  sA4: new Hand(
    'A4s',
    new Combo(Cards.sA, Cards.s4),
    new Combo(Cards.hA, Cards.h4),
    new Combo(Cards.cA, Cards.c4),
    new Combo(Cards.dA, Cards.d4),
  ),

  sA3: new Hand(
    'A3s',
    new Combo(Cards.sA, Cards.s3),
    new Combo(Cards.hA, Cards.h3),
    new Combo(Cards.cA, Cards.c3),
    new Combo(Cards.dA, Cards.d3),
  ),

  sA2: new Hand(
    'A2s',
    new Combo(Cards.sA, Cards.s2),
    new Combo(Cards.hA, Cards.h2),
    new Combo(Cards.cA, Cards.c2),
    new Combo(Cards.dA, Cards.d2)
  ),

  oAK: new Hand(
    'AKo',
    new Combo(Cards.sA, Cards.hK),
    new Combo(Cards.sA, Cards.cK),
    new Combo(Cards.sA, Cards.dK),
    new Combo(Cards.hA, Cards.cK),
    new Combo(Cards.hA, Cards.dK),
    new Combo(Cards.hA, Cards.sK),
    new Combo(Cards.cA, Cards.dK),
    new Combo(Cards.cA, Cards.hK),
    new Combo(Cards.cA, Cards.sK),
    new Combo(Cards.dA, Cards.sK),
    new Combo(Cards.dA, Cards.hK),
    new Combo(Cards.dA, Cards.cK)
  ),

  oAQ: new Hand(
    'AQo',
    new Combo(Cards.sA, Cards.hQ),
    new Combo(Cards.sA, Cards.cQ),
    new Combo(Cards.sA, Cards.dQ),
    new Combo(Cards.hA, Cards.cQ),
    new Combo(Cards.hA, Cards.dQ),
    new Combo(Cards.hA, Cards.sQ),
    new Combo(Cards.cA, Cards.dQ),
    new Combo(Cards.cA, Cards.hQ),
    new Combo(Cards.cA, Cards.sQ),
    new Combo(Cards.dA, Cards.sQ),
    new Combo(Cards.dA, Cards.hQ),
    new Combo(Cards.dA, Cards.cQ)
  ),

  oAJ: new Hand(
    'AJo',
    new Combo(Cards.sA, Cards.hJ),
    new Combo(Cards.sA, Cards.cJ),
    new Combo(Cards.sA, Cards.dJ),
    new Combo(Cards.hA, Cards.cJ),
    new Combo(Cards.hA, Cards.dJ),
    new Combo(Cards.hA, Cards.sJ),
    new Combo(Cards.cA, Cards.dJ),
    new Combo(Cards.cA, Cards.hJ),
    new Combo(Cards.cA, Cards.sJ),
    new Combo(Cards.dA, Cards.sJ),
    new Combo(Cards.dA, Cards.hJ),
    new Combo(Cards.dA, Cards.cJ)
  ),

  oAT: new Hand(
    'ATo',
    new Combo(Cards.sA, Cards.hT),
    new Combo(Cards.sA, Cards.cT),
    new Combo(Cards.sA, Cards.dT),
    new Combo(Cards.hA, Cards.cT),
    new Combo(Cards.hA, Cards.dT),
    new Combo(Cards.hA, Cards.sT),
    new Combo(Cards.cA, Cards.dT),
    new Combo(Cards.cA, Cards.hT),
    new Combo(Cards.cA, Cards.sT),
    new Combo(Cards.dA, Cards.sT),
    new Combo(Cards.dA, Cards.hT),
    new Combo(Cards.dA, Cards.cT)
  ),

  oA9: new Hand(
    'A9o',
    new Combo(Cards.sA, Cards.h9),
    new Combo(Cards.sA, Cards.c9),
    new Combo(Cards.sA, Cards.d9),
    new Combo(Cards.hA, Cards.c9),
    new Combo(Cards.hA, Cards.d9),
    new Combo(Cards.hA, Cards.s9),
    new Combo(Cards.cA, Cards.d9),
    new Combo(Cards.cA, Cards.h9),
    new Combo(Cards.cA, Cards.s9),
    new Combo(Cards.dA, Cards.s9),
    new Combo(Cards.dA, Cards.h9),
    new Combo(Cards.dA, Cards.c9)
  ),

  oA8: new Hand(
    'A8o',
    new Combo(Cards.sA, Cards.h8),
    new Combo(Cards.sA, Cards.c8),
    new Combo(Cards.sA, Cards.d8),
    new Combo(Cards.hA, Cards.c8),
    new Combo(Cards.hA, Cards.d8),
    new Combo(Cards.hA, Cards.s8),
    new Combo(Cards.cA, Cards.d8),
    new Combo(Cards.cA, Cards.h8),
    new Combo(Cards.cA, Cards.s8),
    new Combo(Cards.dA, Cards.s8),
    new Combo(Cards.dA, Cards.h8),
    new Combo(Cards.dA, Cards.c8)
  ),

  oA7: new Hand(
    'A7o',
    new Combo(Cards.sA, Cards.h7),
    new Combo(Cards.sA, Cards.c7),
    new Combo(Cards.sA, Cards.d7),
    new Combo(Cards.hA, Cards.c7),
    new Combo(Cards.hA, Cards.d7),
    new Combo(Cards.hA, Cards.s7),
    new Combo(Cards.cA, Cards.d7),
    new Combo(Cards.cA, Cards.h7),
    new Combo(Cards.cA, Cards.s7),
    new Combo(Cards.dA, Cards.s7),
    new Combo(Cards.dA, Cards.h7),
    new Combo(Cards.dA, Cards.c7)
  ),

  oA6: new Hand(
    'A6o',
    new Combo(Cards.sA, Cards.h6),
    new Combo(Cards.sA, Cards.c6),
    new Combo(Cards.sA, Cards.d6),
    new Combo(Cards.hA, Cards.c6),
    new Combo(Cards.hA, Cards.d6),
    new Combo(Cards.hA, Cards.s6),
    new Combo(Cards.cA, Cards.d6),
    new Combo(Cards.cA, Cards.h6),
    new Combo(Cards.cA, Cards.s6),
    new Combo(Cards.dA, Cards.s6),
    new Combo(Cards.dA, Cards.h6),
    new Combo(Cards.dA, Cards.c6)
  ),

  oA5: new Hand(
    'A5o',
    new Combo(Cards.sA, Cards.h5),
    new Combo(Cards.sA, Cards.c5),
    new Combo(Cards.sA, Cards.d5),
    new Combo(Cards.hA, Cards.c5),
    new Combo(Cards.hA, Cards.d5),
    new Combo(Cards.hA, Cards.s5),
    new Combo(Cards.cA, Cards.d5),
    new Combo(Cards.cA, Cards.h5),
    new Combo(Cards.cA, Cards.s5),
    new Combo(Cards.dA, Cards.s5),
    new Combo(Cards.dA, Cards.h5),
    new Combo(Cards.dA, Cards.c5)
  ),

  oA4: new Hand(
    'A4o',
    new Combo(Cards.sA, Cards.h4),
    new Combo(Cards.sA, Cards.c4),
    new Combo(Cards.sA, Cards.d4),
    new Combo(Cards.hA, Cards.c4),
    new Combo(Cards.hA, Cards.d4),
    new Combo(Cards.hA, Cards.s4),
    new Combo(Cards.cA, Cards.d4),
    new Combo(Cards.cA, Cards.h4),
    new Combo(Cards.cA, Cards.s4),
    new Combo(Cards.dA, Cards.s4),
    new Combo(Cards.dA, Cards.h4),
    new Combo(Cards.dA, Cards.c4)
  ),

  oA3: new Hand(
    'A3o',
    new Combo(Cards.sA, Cards.h3),
    new Combo(Cards.sA, Cards.c3),
    new Combo(Cards.sA, Cards.d3),
    new Combo(Cards.hA, Cards.c3),
    new Combo(Cards.hA, Cards.d3),
    new Combo(Cards.hA, Cards.s3),
    new Combo(Cards.cA, Cards.d3),
    new Combo(Cards.cA, Cards.h3),
    new Combo(Cards.cA, Cards.s3),
    new Combo(Cards.dA, Cards.s3),
    new Combo(Cards.dA, Cards.h3),
    new Combo(Cards.dA, Cards.c3)
  ),

  oA2: new Hand(
    'A2o',
    new Combo(Cards.sA, Cards.h2),
    new Combo(Cards.sA, Cards.c2),
    new Combo(Cards.sA, Cards.d2),
    new Combo(Cards.hA, Cards.c2),
    new Combo(Cards.hA, Cards.d2),
    new Combo(Cards.hA, Cards.s2),
    new Combo(Cards.cA, Cards.d2),
    new Combo(Cards.cA, Cards.h2),
    new Combo(Cards.cA, Cards.s2),
    new Combo(Cards.dA, Cards.s2),
    new Combo(Cards.dA, Cards.h2),
    new Combo(Cards.dA, Cards.c2)
  ),

  // K
  pKK: new Hand(
    'KKp',
    new Combo(Cards.sK, Cards.cK),
    new Combo(Cards.sK, Cards.hK),
    new Combo(Cards.sK, Cards.dK),
    new Combo(Cards.cK, Cards.hK),
    new Combo(Cards.cK, Cards.dK),
    new Combo(Cards.hK, Cards.dK)
  ),

  sKQ: new Hand(
    'KQs',
    new Combo(Cards.sK, Cards.sQ),
    new Combo(Cards.hK, Cards.hQ),
    new Combo(Cards.cK, Cards.cQ),
    new Combo(Cards.dK, Cards.dQ)
  ),

  sKJ: new Hand(
    'KJs',
    new Combo(Cards.sK, Cards.sJ),
    new Combo(Cards.hK, Cards.hJ),
    new Combo(Cards.cK, Cards.cJ),
    new Combo(Cards.dK, Cards.dJ)
  ),

  sKT: new Hand(
    'KTs',
    new Combo(Cards.sK, Cards.sT),
    new Combo(Cards.hK, Cards.hT),
    new Combo(Cards.cK, Cards.cT),
    new Combo(Cards.dK, Cards.dT)
  ),

  sK9: new Hand(
    'K9s',
    new Combo(Cards.sK, Cards.s9),
    new Combo(Cards.hK, Cards.h9),
    new Combo(Cards.cK, Cards.c9),
    new Combo(Cards.dK, Cards.d9)
  ),

  sK8: new Hand(
    'K8s',
    new Combo(Cards.sK, Cards.s8),
    new Combo(Cards.hK, Cards.h8),
    new Combo(Cards.cK, Cards.c8),
    new Combo(Cards.dK, Cards.d8)
  ),

  sK7: new Hand(
    'K7s',
    new Combo(Cards.sK, Cards.s7),
    new Combo(Cards.hK, Cards.h7),
    new Combo(Cards.cK, Cards.c7),
    new Combo(Cards.dK, Cards.d7)
  ),

  sK6: new Hand(
    'K6s',
    new Combo(Cards.sK, Cards.s6),
    new Combo(Cards.hK, Cards.h6),
    new Combo(Cards.cK, Cards.c6),
    new Combo(Cards.dK, Cards.d6)
  ),

  sK5: new Hand(
    'K5s',
    new Combo(Cards.sK, Cards.s5),
    new Combo(Cards.hK, Cards.h5),
    new Combo(Cards.cK, Cards.c5),
    new Combo(Cards.dK, Cards.d5)
  ),

  sK4: new Hand(
    'K4s',
    new Combo(Cards.sK, Cards.s4),
    new Combo(Cards.hK, Cards.h4),
    new Combo(Cards.cK, Cards.c4),
    new Combo(Cards.dK, Cards.d4)
  ),

  sK3: new Hand(
    'K3s',
    new Combo(Cards.sK, Cards.s3),
    new Combo(Cards.hK, Cards.h3),
    new Combo(Cards.cK, Cards.c3),
    new Combo(Cards.dK, Cards.d3)
  ),

  sK2: new Hand(
    'K2s',
    new Combo(Cards.sK, Cards.s2),
    new Combo(Cards.hK, Cards.h2),
    new Combo(Cards.cK, Cards.c2),
    new Combo(Cards.dK, Cards.d2)
  ),

  oKQ: new Hand(
    'KQo',
    new Combo(Cards.sK, Cards.hQ),
    new Combo(Cards.sK, Cards.cQ),
    new Combo(Cards.sK, Cards.dQ),
    new Combo(Cards.hK, Cards.cQ),
    new Combo(Cards.hK, Cards.dQ),
    new Combo(Cards.hK, Cards.sQ),
    new Combo(Cards.cK, Cards.dQ),
    new Combo(Cards.cK, Cards.hQ),
    new Combo(Cards.cK, Cards.sQ),
    new Combo(Cards.dK, Cards.sQ),
    new Combo(Cards.dK, Cards.hQ),
    new Combo(Cards.dK, Cards.cQ)
  ),

  oKJ: new Hand(
    'KJo',
    new Combo(Cards.sK, Cards.hJ),
    new Combo(Cards.sK, Cards.cJ),
    new Combo(Cards.sK, Cards.dJ),
    new Combo(Cards.hK, Cards.cJ),
    new Combo(Cards.hK, Cards.dJ),
    new Combo(Cards.hK, Cards.sJ),
    new Combo(Cards.cK, Cards.dJ),
    new Combo(Cards.cK, Cards.hJ),
    new Combo(Cards.cK, Cards.sJ),
    new Combo(Cards.dK, Cards.sJ),
    new Combo(Cards.dK, Cards.hJ),
    new Combo(Cards.dK, Cards.cJ)
  ),

  oKT: new Hand(
    'KTo',
    new Combo(Cards.sK, Cards.hT),
    new Combo(Cards.sK, Cards.cT),
    new Combo(Cards.sK, Cards.dT),
    new Combo(Cards.hK, Cards.cT),
    new Combo(Cards.hK, Cards.dT),
    new Combo(Cards.hK, Cards.sT),
    new Combo(Cards.cK, Cards.dT),
    new Combo(Cards.cK, Cards.hT),
    new Combo(Cards.cK, Cards.sT),
    new Combo(Cards.dK, Cards.sT),
    new Combo(Cards.dK, Cards.hT),
    new Combo(Cards.dK, Cards.cT)
  ),

  oK9: new Hand(
    'K9o',
    new Combo(Cards.sK, Cards.h9),
    new Combo(Cards.sK, Cards.c9),
    new Combo(Cards.sK, Cards.d9),
    new Combo(Cards.hK, Cards.c9),
    new Combo(Cards.hK, Cards.d9),
    new Combo(Cards.hK, Cards.s9),
    new Combo(Cards.cK, Cards.d9),
    new Combo(Cards.cK, Cards.h9),
    new Combo(Cards.cK, Cards.s9),
    new Combo(Cards.dK, Cards.s9),
    new Combo(Cards.dK, Cards.h9),
    new Combo(Cards.dK, Cards.c9)
  ),

  oK8: new Hand(
    'K8o',
    new Combo(Cards.sK, Cards.h8),
    new Combo(Cards.sK, Cards.c8),
    new Combo(Cards.sK, Cards.d8),
    new Combo(Cards.hK, Cards.c8),
    new Combo(Cards.hK, Cards.d8),
    new Combo(Cards.hK, Cards.s8),
    new Combo(Cards.cK, Cards.d8),
    new Combo(Cards.cK, Cards.h8),
    new Combo(Cards.cK, Cards.s8),
    new Combo(Cards.dK, Cards.s8),
    new Combo(Cards.dK, Cards.h8),
    new Combo(Cards.dK, Cards.c8)
  ),

  oK7: new Hand(
    'K7o',
    new Combo(Cards.sK, Cards.h7),
    new Combo(Cards.sK, Cards.c7),
    new Combo(Cards.sK, Cards.d7),
    new Combo(Cards.hK, Cards.c7),
    new Combo(Cards.hK, Cards.d7),
    new Combo(Cards.hK, Cards.s7),
    new Combo(Cards.cK, Cards.d7),
    new Combo(Cards.cK, Cards.h7),
    new Combo(Cards.cK, Cards.s7),
    new Combo(Cards.dK, Cards.s7),
    new Combo(Cards.dK, Cards.h7),
    new Combo(Cards.dK, Cards.c7)
  ),

  oK6: new Hand(
    'K6o',
    new Combo(Cards.sK, Cards.h6),
    new Combo(Cards.sK, Cards.c6),
    new Combo(Cards.sK, Cards.d6),
    new Combo(Cards.hK, Cards.c6),
    new Combo(Cards.hK, Cards.d6),
    new Combo(Cards.hK, Cards.s6),
    new Combo(Cards.cK, Cards.d6),
    new Combo(Cards.cK, Cards.h6),
    new Combo(Cards.cK, Cards.s6),
    new Combo(Cards.dK, Cards.s6),
    new Combo(Cards.dK, Cards.h6),
    new Combo(Cards.dK, Cards.c6)
  ),

  oK5: new Hand(
    'K5o',
    new Combo(Cards.sK, Cards.h5),
    new Combo(Cards.sK, Cards.c5),
    new Combo(Cards.sK, Cards.d5),
    new Combo(Cards.hK, Cards.c5),
    new Combo(Cards.hK, Cards.d5),
    new Combo(Cards.hK, Cards.s5),
    new Combo(Cards.cK, Cards.d5),
    new Combo(Cards.cK, Cards.h5),
    new Combo(Cards.cK, Cards.s5),
    new Combo(Cards.dK, Cards.s5),
    new Combo(Cards.dK, Cards.h5),
    new Combo(Cards.dK, Cards.c5)
  ),

  oK4: new Hand(
    'K4o',
    new Combo(Cards.sK, Cards.h4),
    new Combo(Cards.sK, Cards.c4),
    new Combo(Cards.sK, Cards.d4),
    new Combo(Cards.hK, Cards.c4),
    new Combo(Cards.hK, Cards.d4),
    new Combo(Cards.hK, Cards.s4),
    new Combo(Cards.cK, Cards.d4),
    new Combo(Cards.cK, Cards.h4),
    new Combo(Cards.cK, Cards.s4),
    new Combo(Cards.dK, Cards.s4),
    new Combo(Cards.dK, Cards.h4),
    new Combo(Cards.dK, Cards.c4)
  ),

  oK3: new Hand(
    'K3o',
    new Combo(Cards.sK, Cards.h3),
    new Combo(Cards.sK, Cards.c3),
    new Combo(Cards.sK, Cards.d3),
    new Combo(Cards.hK, Cards.c3),
    new Combo(Cards.hK, Cards.d3),
    new Combo(Cards.hK, Cards.s3),
    new Combo(Cards.cK, Cards.d3),
    new Combo(Cards.cK, Cards.h3),
    new Combo(Cards.cK, Cards.s3),
    new Combo(Cards.dK, Cards.s3),
    new Combo(Cards.dK, Cards.h3),
    new Combo(Cards.dK, Cards.c3)
  ),

  oK2: new Hand(
    'K2o',
    new Combo(Cards.sK, Cards.h2),
    new Combo(Cards.sK, Cards.c2),
    new Combo(Cards.sK, Cards.d2),
    new Combo(Cards.hK, Cards.c2),
    new Combo(Cards.hK, Cards.d2),
    new Combo(Cards.hK, Cards.s2),
    new Combo(Cards.cK, Cards.d2),
    new Combo(Cards.cK, Cards.h2),
    new Combo(Cards.cK, Cards.s2),
    new Combo(Cards.dK, Cards.s2),
    new Combo(Cards.dK, Cards.h2),
    new Combo(Cards.dK, Cards.c2)
  ),

  // Q
  pQQ: new Hand(
    'QQp',
    new Combo(Cards.sQ, Cards.cQ),
    new Combo(Cards.sQ, Cards.hQ),
    new Combo(Cards.sQ, Cards.dQ),
    new Combo(Cards.cQ, Cards.hQ),
    new Combo(Cards.cQ, Cards.dQ),
    new Combo(Cards.hQ, Cards.dQ)
  ),

  sQJ: new Hand(
    'QJs',
    new Combo(Cards.sQ, Cards.sJ),
    new Combo(Cards.hQ, Cards.hJ),
    new Combo(Cards.cQ, Cards.cJ),
    new Combo(Cards.dQ, Cards.dJ)
  ),

  sQT: new Hand(
    'QTs',
    new Combo(Cards.sQ, Cards.sT),
    new Combo(Cards.hQ, Cards.hT),
    new Combo(Cards.cQ, Cards.cT),
    new Combo(Cards.dQ, Cards.dT)
  ),

  sQ9: new Hand(
    'Q9s',
    new Combo(Cards.sQ, Cards.s9),
    new Combo(Cards.hQ, Cards.h9),
    new Combo(Cards.cQ, Cards.c9),
    new Combo(Cards.dQ, Cards.d9)
  ),

  sQ8: new Hand(
    'Q8s',
    new Combo(Cards.sQ, Cards.s8),
    new Combo(Cards.hQ, Cards.h8),
    new Combo(Cards.cQ, Cards.c8),
    new Combo(Cards.dQ, Cards.d8)
  ),

  sQ7: new Hand(
    'Q7s',
    new Combo(Cards.sQ, Cards.s7),
    new Combo(Cards.hQ, Cards.h7),
    new Combo(Cards.cQ, Cards.c7),
    new Combo(Cards.dQ, Cards.d7)
  ),

  sQ6: new Hand(
    'Q6s',
    new Combo(Cards.sQ, Cards.s6),
    new Combo(Cards.hQ, Cards.h6),
    new Combo(Cards.cQ, Cards.c6),
    new Combo(Cards.dQ, Cards.d6)
  ),

  sQ5: new Hand(
    'Q5s',
    new Combo(Cards.sQ, Cards.s5),
    new Combo(Cards.hQ, Cards.h5),
    new Combo(Cards.cQ, Cards.c5),
    new Combo(Cards.dQ, Cards.d5)
  ),

  sQ4: new Hand(
    'Q4s',
    new Combo(Cards.sQ, Cards.s4),
    new Combo(Cards.hQ, Cards.h4),
    new Combo(Cards.cQ, Cards.c4),
    new Combo(Cards.dQ, Cards.d4)
  ),

  sQ3: new Hand(
    'Q3s',
    new Combo(Cards.sQ, Cards.s3),
    new Combo(Cards.hQ, Cards.h3),
    new Combo(Cards.cQ, Cards.c3),
    new Combo(Cards.dQ, Cards.d3)
  ),

  sQ2: new Hand(
    'Q2s',
    new Combo(Cards.sQ, Cards.s2),
    new Combo(Cards.hQ, Cards.h2),
    new Combo(Cards.cQ, Cards.c2),
    new Combo(Cards.dQ, Cards.d2)
  ),

  oQJ: new Hand(
    'QJo',
    new Combo(Cards.sQ, Cards.hJ),
    new Combo(Cards.sQ, Cards.cJ),
    new Combo(Cards.sQ, Cards.dJ),
    new Combo(Cards.hQ, Cards.cJ),
    new Combo(Cards.hQ, Cards.dJ),
    new Combo(Cards.hQ, Cards.sJ),
    new Combo(Cards.cQ, Cards.dJ),
    new Combo(Cards.cQ, Cards.hJ),
    new Combo(Cards.cQ, Cards.sJ),
    new Combo(Cards.dQ, Cards.sJ),
    new Combo(Cards.dQ, Cards.hJ),
    new Combo(Cards.dQ, Cards.cJ)
  ),

  oQT: new Hand(
    'QTo',
    new Combo(Cards.sQ, Cards.hT),
    new Combo(Cards.sQ, Cards.cT),
    new Combo(Cards.sQ, Cards.dT),
    new Combo(Cards.hQ, Cards.cT),
    new Combo(Cards.hQ, Cards.dT),
    new Combo(Cards.hQ, Cards.sT),
    new Combo(Cards.cQ, Cards.dT),
    new Combo(Cards.cQ, Cards.hT),
    new Combo(Cards.cQ, Cards.sT),
    new Combo(Cards.dQ, Cards.sT),
    new Combo(Cards.dQ, Cards.hT),
    new Combo(Cards.dQ, Cards.cT)
  ),

  oQ9: new Hand(
    'Q9o',
    new Combo(Cards.sQ, Cards.h9),
    new Combo(Cards.sQ, Cards.c9),
    new Combo(Cards.sQ, Cards.d9),
    new Combo(Cards.hQ, Cards.c9),
    new Combo(Cards.hQ, Cards.d9),
    new Combo(Cards.hQ, Cards.s9),
    new Combo(Cards.cQ, Cards.d9),
    new Combo(Cards.cQ, Cards.h9),
    new Combo(Cards.cQ, Cards.s9),
    new Combo(Cards.dQ, Cards.s9),
    new Combo(Cards.dQ, Cards.h9),
    new Combo(Cards.dQ, Cards.c9)
  ),

  oQ8: new Hand(
    'Q8o',
    new Combo(Cards.sQ, Cards.h8),
    new Combo(Cards.sQ, Cards.c8),
    new Combo(Cards.sQ, Cards.d8),
    new Combo(Cards.hQ, Cards.c8),
    new Combo(Cards.hQ, Cards.d8),
    new Combo(Cards.hQ, Cards.s8),
    new Combo(Cards.cQ, Cards.d8),
    new Combo(Cards.cQ, Cards.h8),
    new Combo(Cards.cQ, Cards.s8),
    new Combo(Cards.dQ, Cards.s8),
    new Combo(Cards.dQ, Cards.h8),
    new Combo(Cards.dQ, Cards.c8)
  ),

  oQ7: new Hand(
    'Q7o',
    new Combo(Cards.sQ, Cards.h7),
    new Combo(Cards.sQ, Cards.c7),
    new Combo(Cards.sQ, Cards.d7),
    new Combo(Cards.hQ, Cards.c7),
    new Combo(Cards.hQ, Cards.d7),
    new Combo(Cards.hQ, Cards.s7),
    new Combo(Cards.cQ, Cards.d7),
    new Combo(Cards.cQ, Cards.h7),
    new Combo(Cards.cQ, Cards.s7),
    new Combo(Cards.dQ, Cards.s7),
    new Combo(Cards.dQ, Cards.h7),
    new Combo(Cards.dQ, Cards.c7)
  ),

  oQ6: new Hand(
    'Q6o',
    new Combo(Cards.sQ, Cards.h6),
    new Combo(Cards.sQ, Cards.c6),
    new Combo(Cards.sQ, Cards.d6),
    new Combo(Cards.hQ, Cards.c6),
    new Combo(Cards.hQ, Cards.d6),
    new Combo(Cards.hQ, Cards.s6),
    new Combo(Cards.cQ, Cards.d6),
    new Combo(Cards.cQ, Cards.h6),
    new Combo(Cards.cQ, Cards.s6),
    new Combo(Cards.dQ, Cards.s6),
    new Combo(Cards.dQ, Cards.h6),
    new Combo(Cards.dQ, Cards.c6)
  ),

  oQ5: new Hand(
    'Q5o',
    new Combo(Cards.sQ, Cards.h5),
    new Combo(Cards.sQ, Cards.c5),
    new Combo(Cards.sQ, Cards.d5),
    new Combo(Cards.hQ, Cards.c5),
    new Combo(Cards.hQ, Cards.d5),
    new Combo(Cards.hQ, Cards.s5),
    new Combo(Cards.cQ, Cards.d5),
    new Combo(Cards.cQ, Cards.h5),
    new Combo(Cards.cQ, Cards.s5),
    new Combo(Cards.dQ, Cards.s5),
    new Combo(Cards.dQ, Cards.h5),
    new Combo(Cards.dQ, Cards.c5)
  ),

  oQ4: new Hand(
    'Q4o',
    new Combo(Cards.sQ, Cards.h4),
    new Combo(Cards.sQ, Cards.c4),
    new Combo(Cards.sQ, Cards.d4),
    new Combo(Cards.hQ, Cards.c4),
    new Combo(Cards.hQ, Cards.d4),
    new Combo(Cards.hQ, Cards.s4),
    new Combo(Cards.cQ, Cards.d4),
    new Combo(Cards.cQ, Cards.h4),
    new Combo(Cards.cQ, Cards.s4),
    new Combo(Cards.dQ, Cards.s4),
    new Combo(Cards.dQ, Cards.h4),
    new Combo(Cards.dQ, Cards.c4)
  ),

  oQ3: new Hand(
    'Q3o',
    new Combo(Cards.sQ, Cards.h3),
    new Combo(Cards.sQ, Cards.c3),
    new Combo(Cards.sQ, Cards.d3),
    new Combo(Cards.hQ, Cards.c3),
    new Combo(Cards.hQ, Cards.d3),
    new Combo(Cards.hQ, Cards.s3),
    new Combo(Cards.cQ, Cards.d3),
    new Combo(Cards.cQ, Cards.h3),
    new Combo(Cards.cQ, Cards.s3),
    new Combo(Cards.dQ, Cards.s3),
    new Combo(Cards.dQ, Cards.h3),
    new Combo(Cards.dQ, Cards.c3)
  ),

  oQ2: new Hand(
    'Q2o',
    new Combo(Cards.sQ, Cards.h2),
    new Combo(Cards.sQ, Cards.c2),
    new Combo(Cards.sQ, Cards.d2),
    new Combo(Cards.hQ, Cards.c2),
    new Combo(Cards.hQ, Cards.d2),
    new Combo(Cards.hQ, Cards.s2),
    new Combo(Cards.cQ, Cards.d2),
    new Combo(Cards.cQ, Cards.h2),
    new Combo(Cards.cQ, Cards.s2),
    new Combo(Cards.dQ, Cards.s2),
    new Combo(Cards.dQ, Cards.h2),
    new Combo(Cards.dQ, Cards.c2)
  ),

  // J
  pJJ: new Hand(
    'JJp',
    new Combo(Cards.sJ, Cards.cJ),
    new Combo(Cards.sJ, Cards.hJ),
    new Combo(Cards.sJ, Cards.dJ),
    new Combo(Cards.cJ, Cards.hJ),
    new Combo(Cards.cJ, Cards.dJ),
    new Combo(Cards.hJ, Cards.dJ)
  ),

  sJT: new Hand(
    'JTs',
    new Combo(Cards.sJ, Cards.sT),
    new Combo(Cards.hJ, Cards.hT),
    new Combo(Cards.cJ, Cards.cT),
    new Combo(Cards.dJ, Cards.dT)
  ),

  sJ9: new Hand(
    'J9s',
    new Combo(Cards.sJ, Cards.s9),
    new Combo(Cards.hJ, Cards.h9),
    new Combo(Cards.cJ, Cards.c9),
    new Combo(Cards.dJ, Cards.d9)
  ),

  sJ8: new Hand(
    'J8s',
    new Combo(Cards.sJ, Cards.s8),
    new Combo(Cards.hJ, Cards.h8),
    new Combo(Cards.cJ, Cards.c8),
    new Combo(Cards.dJ, Cards.d8)
  ),

  sJ7: new Hand(
    'J7s',
    new Combo(Cards.sJ, Cards.s7),
    new Combo(Cards.hJ, Cards.h7),
    new Combo(Cards.cJ, Cards.c7),
    new Combo(Cards.dJ, Cards.d7)
  ),

  sJ6: new Hand(
    'J6s',
    new Combo(Cards.sJ, Cards.s6),
    new Combo(Cards.hJ, Cards.h6),
    new Combo(Cards.cJ, Cards.c6),
    new Combo(Cards.dJ, Cards.d6)
  ),

  sJ5: new Hand(
    'J5s',
    new Combo(Cards.sJ, Cards.s5),
    new Combo(Cards.hJ, Cards.h5),
    new Combo(Cards.cJ, Cards.c5),
    new Combo(Cards.dJ, Cards.d5)
  ),

  sJ4: new Hand(
    'J4s',
    new Combo(Cards.sJ, Cards.s4),
    new Combo(Cards.hJ, Cards.h4),
    new Combo(Cards.cJ, Cards.c4),
    new Combo(Cards.dJ, Cards.d4)
  ),

  sJ3: new Hand(
    'J3s',
    new Combo(Cards.sJ, Cards.s3),
    new Combo(Cards.hJ, Cards.h3),
    new Combo(Cards.cJ, Cards.c3),
    new Combo(Cards.dJ, Cards.d3)
  ),

  sJ2: new Hand(
    'J2s',
    new Combo(Cards.sJ, Cards.s2),
    new Combo(Cards.hJ, Cards.h2),
    new Combo(Cards.cJ, Cards.c2),
    new Combo(Cards.dJ, Cards.d2)
  ),

  oJT: new Hand(
    'JTo',
    new Combo(Cards.sJ, Cards.hT),
    new Combo(Cards.sJ, Cards.cT),
    new Combo(Cards.sJ, Cards.dT),
    new Combo(Cards.hJ, Cards.cT),
    new Combo(Cards.hJ, Cards.dT),
    new Combo(Cards.hJ, Cards.sT),
    new Combo(Cards.cJ, Cards.dT),
    new Combo(Cards.cJ, Cards.hT),
    new Combo(Cards.cJ, Cards.sT),
    new Combo(Cards.dJ, Cards.sT),
    new Combo(Cards.dJ, Cards.hT),
    new Combo(Cards.dJ, Cards.cT)
  ),

  oJ9: new Hand(
    'J9o',
    new Combo(Cards.sJ, Cards.h9),
    new Combo(Cards.sJ, Cards.c9),
    new Combo(Cards.sJ, Cards.d9),
    new Combo(Cards.hJ, Cards.c9),
    new Combo(Cards.hJ, Cards.d9),
    new Combo(Cards.hJ, Cards.s9),
    new Combo(Cards.cJ, Cards.d9),
    new Combo(Cards.cJ, Cards.h9),
    new Combo(Cards.cJ, Cards.s9),
    new Combo(Cards.dJ, Cards.s9),
    new Combo(Cards.dJ, Cards.h9),
    new Combo(Cards.dJ, Cards.c9)
  ),

  oJ8: new Hand(
    'J8o',
    new Combo(Cards.sJ, Cards.h8),
    new Combo(Cards.sJ, Cards.c8),
    new Combo(Cards.sJ, Cards.d8),
    new Combo(Cards.hJ, Cards.c8),
    new Combo(Cards.hJ, Cards.d8),
    new Combo(Cards.hJ, Cards.s8),
    new Combo(Cards.cJ, Cards.d8),
    new Combo(Cards.cJ, Cards.h8),
    new Combo(Cards.cJ, Cards.s8),
    new Combo(Cards.dJ, Cards.s8),
    new Combo(Cards.dJ, Cards.h8),
    new Combo(Cards.dJ, Cards.c8)
  ),

  oJ7: new Hand(
    'J7o',
    new Combo(Cards.sJ, Cards.h7),
    new Combo(Cards.sJ, Cards.c7),
    new Combo(Cards.sJ, Cards.d7),
    new Combo(Cards.hJ, Cards.c7),
    new Combo(Cards.hJ, Cards.d7),
    new Combo(Cards.hJ, Cards.s7),
    new Combo(Cards.cJ, Cards.d7),
    new Combo(Cards.cJ, Cards.h7),
    new Combo(Cards.cJ, Cards.s7),
    new Combo(Cards.dJ, Cards.s7),
    new Combo(Cards.dJ, Cards.h7),
    new Combo(Cards.dJ, Cards.c7)
  ),

  oJ6: new Hand(
    'J6o',
    new Combo(Cards.sJ, Cards.h6),
    new Combo(Cards.sJ, Cards.c6),
    new Combo(Cards.sJ, Cards.d6),
    new Combo(Cards.hJ, Cards.c6),
    new Combo(Cards.hJ, Cards.d6),
    new Combo(Cards.hJ, Cards.s6),
    new Combo(Cards.cJ, Cards.d6),
    new Combo(Cards.cJ, Cards.h6),
    new Combo(Cards.cJ, Cards.s6),
    new Combo(Cards.dJ, Cards.s6),
    new Combo(Cards.dJ, Cards.h6),
    new Combo(Cards.dJ, Cards.c6)
  ),

  oJ5: new Hand(
    'J5o',
    new Combo(Cards.sJ, Cards.h5),
    new Combo(Cards.sJ, Cards.c5),
    new Combo(Cards.sJ, Cards.d5),
    new Combo(Cards.hJ, Cards.c5),
    new Combo(Cards.hJ, Cards.d5),
    new Combo(Cards.hJ, Cards.s5),
    new Combo(Cards.cJ, Cards.d5),
    new Combo(Cards.cJ, Cards.h5),
    new Combo(Cards.cJ, Cards.s5),
    new Combo(Cards.dJ, Cards.s5),
    new Combo(Cards.dJ, Cards.h5),
    new Combo(Cards.dJ, Cards.c5)
  ),

  oJ4: new Hand(
    'J4o',
    new Combo(Cards.sJ, Cards.h4),
    new Combo(Cards.sJ, Cards.c4),
    new Combo(Cards.sJ, Cards.d4),
    new Combo(Cards.hJ, Cards.c4),
    new Combo(Cards.hJ, Cards.d4),
    new Combo(Cards.hJ, Cards.s4),
    new Combo(Cards.cJ, Cards.d4),
    new Combo(Cards.cJ, Cards.h4),
    new Combo(Cards.cJ, Cards.s4),
    new Combo(Cards.dJ, Cards.s4),
    new Combo(Cards.dJ, Cards.h4),
    new Combo(Cards.dJ, Cards.c4)
  ),

  oJ3: new Hand(
    'J3o',
    new Combo(Cards.sJ, Cards.h3),
    new Combo(Cards.sJ, Cards.c3),
    new Combo(Cards.sJ, Cards.d3),
    new Combo(Cards.hJ, Cards.c3),
    new Combo(Cards.hJ, Cards.d3),
    new Combo(Cards.hJ, Cards.s3),
    new Combo(Cards.cJ, Cards.d3),
    new Combo(Cards.cJ, Cards.h3),
    new Combo(Cards.cJ, Cards.s3),
    new Combo(Cards.dJ, Cards.s3),
    new Combo(Cards.dJ, Cards.h3),
    new Combo(Cards.dJ, Cards.c3)
  ),

  oJ2: new Hand(
    'J2o',
    new Combo(Cards.sJ, Cards.h2),
    new Combo(Cards.sJ, Cards.c2),
    new Combo(Cards.sJ, Cards.d2),
    new Combo(Cards.hJ, Cards.c2),
    new Combo(Cards.hJ, Cards.d2),
    new Combo(Cards.hJ, Cards.s2),
    new Combo(Cards.cJ, Cards.d2),
    new Combo(Cards.cJ, Cards.h2),
    new Combo(Cards.cJ, Cards.s2),
    new Combo(Cards.dJ, Cards.s2),
    new Combo(Cards.dJ, Cards.h2),
    new Combo(Cards.dJ, Cards.c2)
  ),

  // T
  pTT: new Hand(
    'TTp',
    new Combo(Cards.sT, Cards.cT),
    new Combo(Cards.sT, Cards.hT),
    new Combo(Cards.sT, Cards.dT),
    new Combo(Cards.cT, Cards.hT),
    new Combo(Cards.cT, Cards.dT),
    new Combo(Cards.hT, Cards.dT)
  ),

  sT9: new Hand(
    'T9s',
    new Combo(Cards.sT, Cards.s9),
    new Combo(Cards.hT, Cards.h9),
    new Combo(Cards.cT, Cards.c9),
    new Combo(Cards.dT, Cards.d9)
  ),

  sT8: new Hand(
    'T8s',
    new Combo(Cards.sT, Cards.s8),
    new Combo(Cards.hT, Cards.h8),
    new Combo(Cards.cT, Cards.c8),
    new Combo(Cards.dT, Cards.d8)
  ),

  sT7: new Hand(
    'T7s',
    new Combo(Cards.sT, Cards.s7),
    new Combo(Cards.hT, Cards.h7),
    new Combo(Cards.cT, Cards.c7),
    new Combo(Cards.dT, Cards.d7)
  ),

  sT6: new Hand(
    'T6s',
    new Combo(Cards.sT, Cards.s6),
    new Combo(Cards.hT, Cards.h6),
    new Combo(Cards.cT, Cards.c6),
    new Combo(Cards.dT, Cards.d6)
  ),

  sT5: new Hand(
    'T5s',
    new Combo(Cards.sT, Cards.s5),
    new Combo(Cards.hT, Cards.h5),
    new Combo(Cards.cT, Cards.c5),
    new Combo(Cards.dT, Cards.d5)
  ),

  sT4: new Hand(
    'T4s',
    new Combo(Cards.sT, Cards.s4),
    new Combo(Cards.hT, Cards.h4),
    new Combo(Cards.cT, Cards.c4),
    new Combo(Cards.dT, Cards.d4)
  ),

  sT3: new Hand(
    'T3s',
    new Combo(Cards.sT, Cards.s3),
    new Combo(Cards.hT, Cards.h3),
    new Combo(Cards.cT, Cards.c3),
    new Combo(Cards.dT, Cards.d3)
  ),

  sT2: new Hand(
    'T2s',
    new Combo(Cards.sT, Cards.s2),
    new Combo(Cards.hT, Cards.h2),
    new Combo(Cards.cT, Cards.c2),
    new Combo(Cards.dT, Cards.d2)
  ),

  oT9: new Hand(
    'T9o',
    new Combo(Cards.sT, Cards.h9),
    new Combo(Cards.sT, Cards.c9),
    new Combo(Cards.sT, Cards.d9),
    new Combo(Cards.hT, Cards.c9),
    new Combo(Cards.hT, Cards.d9),
    new Combo(Cards.hT, Cards.s9),
    new Combo(Cards.cT, Cards.d9),
    new Combo(Cards.cT, Cards.h9),
    new Combo(Cards.cT, Cards.s9),
    new Combo(Cards.dT, Cards.s9),
    new Combo(Cards.dT, Cards.h9),
    new Combo(Cards.dT, Cards.c9)
  ),

  oT8: new Hand(
    'T8o',
    new Combo(Cards.sT, Cards.h8),
    new Combo(Cards.sT, Cards.c8),
    new Combo(Cards.sT, Cards.d8),
    new Combo(Cards.hT, Cards.c8),
    new Combo(Cards.hT, Cards.d8),
    new Combo(Cards.hT, Cards.s8),
    new Combo(Cards.cT, Cards.d8),
    new Combo(Cards.cT, Cards.h8),
    new Combo(Cards.cT, Cards.s8),
    new Combo(Cards.dT, Cards.s8),
    new Combo(Cards.dT, Cards.h8),
    new Combo(Cards.dT, Cards.c8)
  ),

  oT7: new Hand(
    'T7o',
    new Combo(Cards.sT, Cards.h7),
    new Combo(Cards.sT, Cards.c7),
    new Combo(Cards.sT, Cards.d7),
    new Combo(Cards.hT, Cards.c7),
    new Combo(Cards.hT, Cards.d7),
    new Combo(Cards.hT, Cards.s7),
    new Combo(Cards.cT, Cards.d7),
    new Combo(Cards.cT, Cards.h7),
    new Combo(Cards.cT, Cards.s7),
    new Combo(Cards.dT, Cards.s7),
    new Combo(Cards.dT, Cards.h7),
    new Combo(Cards.dT, Cards.c7)
  ),

  oT6: new Hand(
    'T6o',
    new Combo(Cards.sT, Cards.h6),
    new Combo(Cards.sT, Cards.c6),
    new Combo(Cards.sT, Cards.d6),
    new Combo(Cards.hT, Cards.c6),
    new Combo(Cards.hT, Cards.d6),
    new Combo(Cards.hT, Cards.s6),
    new Combo(Cards.cT, Cards.d6),
    new Combo(Cards.cT, Cards.h6),
    new Combo(Cards.cT, Cards.s6),
    new Combo(Cards.dT, Cards.s6),
    new Combo(Cards.dT, Cards.h6),
    new Combo(Cards.dT, Cards.c6)
  ),

  oT5: new Hand(
    'T5o',
    new Combo(Cards.sT, Cards.h5),
    new Combo(Cards.sT, Cards.c5),
    new Combo(Cards.sT, Cards.d5),
    new Combo(Cards.hT, Cards.c5),
    new Combo(Cards.hT, Cards.d5),
    new Combo(Cards.hT, Cards.s5),
    new Combo(Cards.cT, Cards.d5),
    new Combo(Cards.cT, Cards.h5),
    new Combo(Cards.cT, Cards.s5),
    new Combo(Cards.dT, Cards.s5),
    new Combo(Cards.dT, Cards.h5),
    new Combo(Cards.dT, Cards.c5)
  ),

  oT4: new Hand(
    'T4o',
    new Combo(Cards.sT, Cards.h4),
    new Combo(Cards.sT, Cards.c4),
    new Combo(Cards.sT, Cards.d4),
    new Combo(Cards.hT, Cards.c4),
    new Combo(Cards.hT, Cards.d4),
    new Combo(Cards.hT, Cards.s4),
    new Combo(Cards.cT, Cards.d4),
    new Combo(Cards.cT, Cards.h4),
    new Combo(Cards.cT, Cards.s4),
    new Combo(Cards.dT, Cards.s4),
    new Combo(Cards.dT, Cards.h4),
    new Combo(Cards.dT, Cards.c4)
  ),

  oT3: new Hand(
    'T3o',
    new Combo(Cards.sT, Cards.h3),
    new Combo(Cards.sT, Cards.c3),
    new Combo(Cards.sT, Cards.d3),
    new Combo(Cards.hT, Cards.c3),
    new Combo(Cards.hT, Cards.d3),
    new Combo(Cards.hT, Cards.s3),
    new Combo(Cards.cT, Cards.d3),
    new Combo(Cards.cT, Cards.h3),
    new Combo(Cards.cT, Cards.s3),
    new Combo(Cards.dT, Cards.s3),
    new Combo(Cards.dT, Cards.h3),
    new Combo(Cards.dT, Cards.c3)
  ),

  oT2: new Hand(
    'T2o',
    new Combo(Cards.sT, Cards.h2),
    new Combo(Cards.sT, Cards.c2),
    new Combo(Cards.sT, Cards.d2),
    new Combo(Cards.hT, Cards.c2),
    new Combo(Cards.hT, Cards.d2),
    new Combo(Cards.hT, Cards.s2),
    new Combo(Cards.cT, Cards.d2),
    new Combo(Cards.cT, Cards.h2),
    new Combo(Cards.cT, Cards.s2),
    new Combo(Cards.dT, Cards.s2),
    new Combo(Cards.dT, Cards.h2),
    new Combo(Cards.dT, Cards.c2)
  ),

  // 9
  p99: new Hand(
    '99p',
    new Combo(Cards.s9, Cards.c9),
    new Combo(Cards.s9, Cards.h9),
    new Combo(Cards.s9, Cards.d9),
    new Combo(Cards.c9, Cards.h9),
    new Combo(Cards.c9, Cards.d9),
    new Combo(Cards.h9, Cards.d9)
  ),

  s98: new Hand(
    '98s',
    new Combo(Cards.s9, Cards.s8),
    new Combo(Cards.h9, Cards.h8),
    new Combo(Cards.c9, Cards.c8),
    new Combo(Cards.d9, Cards.d8)
  ),

  s97: new Hand(
    '97s',
    new Combo(Cards.s9, Cards.s7),
    new Combo(Cards.h9, Cards.h7),
    new Combo(Cards.c9, Cards.c7),
    new Combo(Cards.d9, Cards.d7)
  ),

  s96: new Hand(
    '96s',
    new Combo(Cards.s9, Cards.s6),
    new Combo(Cards.h9, Cards.h6),
    new Combo(Cards.c9, Cards.c6),
    new Combo(Cards.d9, Cards.d6)
  ),

  s95: new Hand(
    '95s',
    new Combo(Cards.s9, Cards.s5),
    new Combo(Cards.h9, Cards.h5),
    new Combo(Cards.c9, Cards.c5),
    new Combo(Cards.d9, Cards.d5)
  ),

  s94: new Hand(
    '94s',
    new Combo(Cards.s9, Cards.s4),
    new Combo(Cards.h9, Cards.h4),
    new Combo(Cards.c9, Cards.c4),
    new Combo(Cards.d9, Cards.d4)
  ),

  s93: new Hand(
    '93s',
    new Combo(Cards.s9, Cards.s3),
    new Combo(Cards.h9, Cards.h3),
    new Combo(Cards.c9, Cards.c3),
    new Combo(Cards.d9, Cards.d3)
  ),

  s92: new Hand(
    '92s',
    new Combo(Cards.s9, Cards.s2),
    new Combo(Cards.h9, Cards.h2),
    new Combo(Cards.c9, Cards.c2),
    new Combo(Cards.d9, Cards.d2)
  ),

  o98: new Hand(
    '98o',
    new Combo(Cards.s9, Cards.h8),
    new Combo(Cards.s9, Cards.c8),
    new Combo(Cards.s9, Cards.d8),
    new Combo(Cards.h9, Cards.c8),
    new Combo(Cards.h9, Cards.d8),
    new Combo(Cards.h9, Cards.s8),
    new Combo(Cards.c9, Cards.d8),
    new Combo(Cards.c9, Cards.h8),
    new Combo(Cards.c9, Cards.s8),
    new Combo(Cards.d9, Cards.s8),
    new Combo(Cards.d9, Cards.h8),
    new Combo(Cards.d9, Cards.c8)
  ),

  o97: new Hand(
    '97o',
    new Combo(Cards.s9, Cards.h7),
    new Combo(Cards.s9, Cards.c7),
    new Combo(Cards.s9, Cards.d7),
    new Combo(Cards.h9, Cards.c7),
    new Combo(Cards.h9, Cards.d7),
    new Combo(Cards.h9, Cards.s7),
    new Combo(Cards.c9, Cards.d7),
    new Combo(Cards.c9, Cards.h7),
    new Combo(Cards.c9, Cards.s7),
    new Combo(Cards.d9, Cards.s7),
    new Combo(Cards.d9, Cards.h7),
    new Combo(Cards.d9, Cards.c7)
  ),

  o96: new Hand(
    '96o',
    new Combo(Cards.s9, Cards.h6),
    new Combo(Cards.s9, Cards.c6),
    new Combo(Cards.s9, Cards.d6),
    new Combo(Cards.h9, Cards.c6),
    new Combo(Cards.h9, Cards.d6),
    new Combo(Cards.h9, Cards.s6),
    new Combo(Cards.c9, Cards.d6),
    new Combo(Cards.c9, Cards.h6),
    new Combo(Cards.c9, Cards.s6),
    new Combo(Cards.d9, Cards.s6),
    new Combo(Cards.d9, Cards.h6),
    new Combo(Cards.d9, Cards.c6)
  ),

  o95: new Hand(
    '95o',
    new Combo(Cards.s9, Cards.h5),
    new Combo(Cards.s9, Cards.c5),
    new Combo(Cards.s9, Cards.d5),
    new Combo(Cards.h9, Cards.c5),
    new Combo(Cards.h9, Cards.d5),
    new Combo(Cards.h9, Cards.s5),
    new Combo(Cards.c9, Cards.d5),
    new Combo(Cards.c9, Cards.h5),
    new Combo(Cards.c9, Cards.s5),
    new Combo(Cards.d9, Cards.s5),
    new Combo(Cards.d9, Cards.h5),
    new Combo(Cards.d9, Cards.c5)
  ),

  o94: new Hand(
    '94o',
    new Combo(Cards.s9, Cards.h4),
    new Combo(Cards.s9, Cards.c4),
    new Combo(Cards.s9, Cards.d4),
    new Combo(Cards.h9, Cards.c4),
    new Combo(Cards.h9, Cards.d4),
    new Combo(Cards.h9, Cards.s4),
    new Combo(Cards.c9, Cards.d4),
    new Combo(Cards.c9, Cards.h4),
    new Combo(Cards.c9, Cards.s4),
    new Combo(Cards.d9, Cards.s4),
    new Combo(Cards.d9, Cards.h4),
    new Combo(Cards.d9, Cards.c4)
  ),

  o93: new Hand(
    '93o',
    new Combo(Cards.s9, Cards.h3),
    new Combo(Cards.s9, Cards.c3),
    new Combo(Cards.s9, Cards.d3),
    new Combo(Cards.h9, Cards.c3),
    new Combo(Cards.h9, Cards.d3),
    new Combo(Cards.h9, Cards.s3),
    new Combo(Cards.c9, Cards.d3),
    new Combo(Cards.c9, Cards.h3),
    new Combo(Cards.c9, Cards.s3),
    new Combo(Cards.d9, Cards.s3),
    new Combo(Cards.d9, Cards.h3),
    new Combo(Cards.d9, Cards.c3)
  ),

  o92: new Hand(
    '92o',
    new Combo(Cards.s9, Cards.h2),
    new Combo(Cards.s9, Cards.c2),
    new Combo(Cards.s9, Cards.d2),
    new Combo(Cards.h9, Cards.c2),
    new Combo(Cards.h9, Cards.d2),
    new Combo(Cards.h9, Cards.s2),
    new Combo(Cards.c9, Cards.d2),
    new Combo(Cards.c9, Cards.h2),
    new Combo(Cards.c9, Cards.s2),
    new Combo(Cards.d9, Cards.s2),
    new Combo(Cards.d9, Cards.h2),
    new Combo(Cards.d9, Cards.c2)
  ),

  // 8
  p88: new Hand(
    '88p',
    new Combo(Cards.s8, Cards.c8),
    new Combo(Cards.s8, Cards.h8),
    new Combo(Cards.s8, Cards.d8),
    new Combo(Cards.c8, Cards.h8),
    new Combo(Cards.c8, Cards.d8),
    new Combo(Cards.h8, Cards.d8)
  ),

  s87: new Hand(
    '87s',
    new Combo(Cards.s8, Cards.s7),
    new Combo(Cards.h8, Cards.h7),
    new Combo(Cards.c8, Cards.c7),
    new Combo(Cards.d8, Cards.d7)
  ),

  s86: new Hand(
    '86s',
    new Combo(Cards.s8, Cards.s6),
    new Combo(Cards.h8, Cards.h6),
    new Combo(Cards.c8, Cards.c6),
    new Combo(Cards.d8, Cards.d6)
  ),

  s85: new Hand(
    '85s',
    new Combo(Cards.s8, Cards.s5),
    new Combo(Cards.h8, Cards.h5),
    new Combo(Cards.c8, Cards.c5),
    new Combo(Cards.d8, Cards.d5)
  ),

  s84: new Hand(
    '84s',
    new Combo(Cards.s8, Cards.s4),
    new Combo(Cards.h8, Cards.h4),
    new Combo(Cards.c8, Cards.c4),
    new Combo(Cards.d8, Cards.d4)
  ),

  s83: new Hand(
    '83s',
    new Combo(Cards.s8, Cards.s3),
    new Combo(Cards.h8, Cards.h3),
    new Combo(Cards.c8, Cards.c3),
    new Combo(Cards.d8, Cards.d3)
  ),

  s82: new Hand(
    '82s',
    new Combo(Cards.s8, Cards.s2),
    new Combo(Cards.h8, Cards.h2),
    new Combo(Cards.c8, Cards.c2),
    new Combo(Cards.d8, Cards.d2)
  ),

  o87: new Hand(
    '87o',
    new Combo(Cards.s8, Cards.h7),
    new Combo(Cards.s8, Cards.c7),
    new Combo(Cards.s8, Cards.d7),
    new Combo(Cards.h8, Cards.c7),
    new Combo(Cards.h8, Cards.d7),
    new Combo(Cards.h8, Cards.s7),
    new Combo(Cards.c8, Cards.d7),
    new Combo(Cards.c8, Cards.h7),
    new Combo(Cards.c8, Cards.s7),
    new Combo(Cards.d8, Cards.s7),
    new Combo(Cards.d8, Cards.h7),
    new Combo(Cards.d8, Cards.c7)
  ),

  o86: new Hand(
    '86o',
    new Combo(Cards.s8, Cards.h6),
    new Combo(Cards.s8, Cards.c6),
    new Combo(Cards.s8, Cards.d6),
    new Combo(Cards.h8, Cards.c6),
    new Combo(Cards.h8, Cards.d6),
    new Combo(Cards.h8, Cards.s6),
    new Combo(Cards.c8, Cards.d6),
    new Combo(Cards.c8, Cards.h6),
    new Combo(Cards.c8, Cards.s6),
    new Combo(Cards.d8, Cards.s6),
    new Combo(Cards.d8, Cards.h6),
    new Combo(Cards.d8, Cards.c6)
  ),

  o85: new Hand(
    '85o',
    new Combo(Cards.s8, Cards.h5),
    new Combo(Cards.s8, Cards.c5),
    new Combo(Cards.s8, Cards.d5),
    new Combo(Cards.h8, Cards.c5),
    new Combo(Cards.h8, Cards.d5),
    new Combo(Cards.h8, Cards.s5),
    new Combo(Cards.c8, Cards.d5),
    new Combo(Cards.c8, Cards.h5),
    new Combo(Cards.c8, Cards.s5),
    new Combo(Cards.d8, Cards.s5),
    new Combo(Cards.d8, Cards.h5),
    new Combo(Cards.d8, Cards.c5)
  ),

  o84: new Hand(
    '84o',
    new Combo(Cards.s8, Cards.h4),
    new Combo(Cards.s8, Cards.c4),
    new Combo(Cards.s8, Cards.d4),
    new Combo(Cards.h8, Cards.c4),
    new Combo(Cards.h8, Cards.d4),
    new Combo(Cards.h8, Cards.s4),
    new Combo(Cards.c8, Cards.d4),
    new Combo(Cards.c8, Cards.h4),
    new Combo(Cards.c8, Cards.s4),
    new Combo(Cards.d8, Cards.s4),
    new Combo(Cards.d8, Cards.h4),
    new Combo(Cards.d8, Cards.c4)
  ),

  o83: new Hand(
    '83o',
    new Combo(Cards.s8, Cards.h3),
    new Combo(Cards.s8, Cards.c3),
    new Combo(Cards.s8, Cards.d3),
    new Combo(Cards.h8, Cards.c3),
    new Combo(Cards.h8, Cards.d3),
    new Combo(Cards.h8, Cards.s3),
    new Combo(Cards.c8, Cards.d3),
    new Combo(Cards.c8, Cards.h3),
    new Combo(Cards.c8, Cards.s3),
    new Combo(Cards.d8, Cards.s3),
    new Combo(Cards.d8, Cards.h3),
    new Combo(Cards.d8, Cards.c3)
  ),

  o82: new Hand(
    '82o',
    new Combo(Cards.s8, Cards.h2),
    new Combo(Cards.s8, Cards.c2),
    new Combo(Cards.s8, Cards.d2),
    new Combo(Cards.h8, Cards.c2),
    new Combo(Cards.h8, Cards.d2),
    new Combo(Cards.h8, Cards.s2),
    new Combo(Cards.c8, Cards.d2),
    new Combo(Cards.c8, Cards.h2),
    new Combo(Cards.c8, Cards.s2),
    new Combo(Cards.d8, Cards.s2),
    new Combo(Cards.d8, Cards.h2),
    new Combo(Cards.d8, Cards.c2)
  ),

  // 7
  p77: new Hand(
    '77p',
    new Combo(Cards.s7, Cards.c7),
    new Combo(Cards.s7, Cards.h7),
    new Combo(Cards.s7, Cards.d7),
    new Combo(Cards.c7, Cards.h7),
    new Combo(Cards.c7, Cards.d7),
    new Combo(Cards.h7, Cards.d7)
  ),

  s76: new Hand(
    '76s',
    new Combo(Cards.s7, Cards.s6),
    new Combo(Cards.h7, Cards.h6),
    new Combo(Cards.c7, Cards.c6),
    new Combo(Cards.d7, Cards.d6)
  ),

  s75: new Hand(
    '75s',
    new Combo(Cards.s7, Cards.s5),
    new Combo(Cards.h7, Cards.h5),
    new Combo(Cards.c7, Cards.c5),
    new Combo(Cards.d7, Cards.d5)
  ),

  s74: new Hand(
    '74s',
    new Combo(Cards.s7, Cards.s4),
    new Combo(Cards.h7, Cards.h4),
    new Combo(Cards.c7, Cards.c4),
    new Combo(Cards.d7, Cards.d4)
  ),

  s73: new Hand(
    '73s',
    new Combo(Cards.s7, Cards.s3),
    new Combo(Cards.h7, Cards.h3),
    new Combo(Cards.c7, Cards.c3),
    new Combo(Cards.d7, Cards.d3)
  ),

  s72: new Hand(
    '72s',
    new Combo(Cards.s7, Cards.s2),
    new Combo(Cards.h7, Cards.h2),
    new Combo(Cards.c7, Cards.c2),
    new Combo(Cards.d7, Cards.d2)
  ),

  o76: new Hand(
    '76o',
    new Combo(Cards.s7, Cards.h6),
    new Combo(Cards.s7, Cards.c6),
    new Combo(Cards.s7, Cards.d6),
    new Combo(Cards.h7, Cards.c6),
    new Combo(Cards.h7, Cards.d6),
    new Combo(Cards.h7, Cards.s6),
    new Combo(Cards.c7, Cards.d6),
    new Combo(Cards.c7, Cards.h6),
    new Combo(Cards.c7, Cards.s6),
    new Combo(Cards.d7, Cards.s6),
    new Combo(Cards.d7, Cards.h6),
    new Combo(Cards.d7, Cards.c6)
  ),

  o75: new Hand(
    '75o',
    new Combo(Cards.s7, Cards.h5),
    new Combo(Cards.s7, Cards.c5),
    new Combo(Cards.s7, Cards.d5),
    new Combo(Cards.h7, Cards.c5),
    new Combo(Cards.h7, Cards.d5),
    new Combo(Cards.h7, Cards.s5),
    new Combo(Cards.c7, Cards.d5),
    new Combo(Cards.c7, Cards.h5),
    new Combo(Cards.c7, Cards.s5),
    new Combo(Cards.d7, Cards.s5),
    new Combo(Cards.d7, Cards.h5),
    new Combo(Cards.d7, Cards.c5)
  ),

  o74: new Hand(
    '74o',
    new Combo(Cards.s7, Cards.h4),
    new Combo(Cards.s7, Cards.c4),
    new Combo(Cards.s7, Cards.d4),
    new Combo(Cards.h7, Cards.c4),
    new Combo(Cards.h7, Cards.d4),
    new Combo(Cards.h7, Cards.s4),
    new Combo(Cards.c7, Cards.d4),
    new Combo(Cards.c7, Cards.h4),
    new Combo(Cards.c7, Cards.s4),
    new Combo(Cards.d7, Cards.s4),
    new Combo(Cards.d7, Cards.h4),
    new Combo(Cards.d7, Cards.c4)
  ),

  o73: new Hand(
    '73o',
    new Combo(Cards.s7, Cards.h3),
    new Combo(Cards.s7, Cards.c3),
    new Combo(Cards.s7, Cards.d3),
    new Combo(Cards.h7, Cards.c3),
    new Combo(Cards.h7, Cards.d3),
    new Combo(Cards.h7, Cards.s3),
    new Combo(Cards.c7, Cards.d3),
    new Combo(Cards.c7, Cards.h3),
    new Combo(Cards.c7, Cards.s3),
    new Combo(Cards.d7, Cards.s3),
    new Combo(Cards.d7, Cards.h3),
    new Combo(Cards.d7, Cards.c3)
  ),

  o72: new Hand(
    '72o',
    new Combo(Cards.s7, Cards.h2),
    new Combo(Cards.s7, Cards.c2),
    new Combo(Cards.s7, Cards.d2),
    new Combo(Cards.h7, Cards.c2),
    new Combo(Cards.h7, Cards.d2),
    new Combo(Cards.h7, Cards.s2),
    new Combo(Cards.c7, Cards.d2),
    new Combo(Cards.c7, Cards.h2),
    new Combo(Cards.c7, Cards.s2),
    new Combo(Cards.d7, Cards.s2),
    new Combo(Cards.d7, Cards.h2),
    new Combo(Cards.d7, Cards.c2)
  ),

  // 6
  p66: new Hand(
    '66p',
    new Combo(Cards.s6, Cards.c6),
    new Combo(Cards.s6, Cards.h6),
    new Combo(Cards.s6, Cards.d6),
    new Combo(Cards.c6, Cards.h6),
    new Combo(Cards.c6, Cards.d6),
    new Combo(Cards.h6, Cards.d6)
  ),

  s65: new Hand(
    '65s',
    new Combo(Cards.s6, Cards.s5),
    new Combo(Cards.h6, Cards.h5),
    new Combo(Cards.c6, Cards.c5),
    new Combo(Cards.d6, Cards.d5)
  ),

  s64: new Hand(
    '64s',
    new Combo(Cards.s6, Cards.s4),
    new Combo(Cards.h6, Cards.h4),
    new Combo(Cards.c6, Cards.c4),
    new Combo(Cards.d6, Cards.d4)
  ),

  s63: new Hand(
    '63s',
    new Combo(Cards.s6, Cards.s3),
    new Combo(Cards.h6, Cards.h3),
    new Combo(Cards.c6, Cards.c3),
    new Combo(Cards.d6, Cards.d3)
  ),

  s62: new Hand(
    '62s',
    new Combo(Cards.s6, Cards.s2),
    new Combo(Cards.h6, Cards.h2),
    new Combo(Cards.c6, Cards.c2),
    new Combo(Cards.d6, Cards.d2)
  ),

  o65: new Hand(
    '65o',
    new Combo(Cards.s6, Cards.h5),
    new Combo(Cards.s6, Cards.c5),
    new Combo(Cards.s6, Cards.d5),
    new Combo(Cards.h6, Cards.c5),
    new Combo(Cards.h6, Cards.d5),
    new Combo(Cards.h6, Cards.s5),
    new Combo(Cards.c6, Cards.d5),
    new Combo(Cards.c6, Cards.h5),
    new Combo(Cards.c6, Cards.s5),
    new Combo(Cards.d6, Cards.s5),
    new Combo(Cards.d6, Cards.h5),
    new Combo(Cards.d6, Cards.c5)
  ),

  o64: new Hand(
    '64o',
    new Combo(Cards.s6, Cards.h4),
    new Combo(Cards.s6, Cards.c4),
    new Combo(Cards.s6, Cards.d4),
    new Combo(Cards.h6, Cards.c4),
    new Combo(Cards.h6, Cards.d4),
    new Combo(Cards.h6, Cards.s4),
    new Combo(Cards.c6, Cards.d4),
    new Combo(Cards.c6, Cards.h4),
    new Combo(Cards.c6, Cards.s4),
    new Combo(Cards.d6, Cards.s4),
    new Combo(Cards.d6, Cards.h4),
    new Combo(Cards.d6, Cards.c4)
  ),

  o63: new Hand(
    '63o',
    new Combo(Cards.s6, Cards.h3),
    new Combo(Cards.s6, Cards.c3),
    new Combo(Cards.s6, Cards.d3),
    new Combo(Cards.h6, Cards.c3),
    new Combo(Cards.h6, Cards.d3),
    new Combo(Cards.h6, Cards.s3),
    new Combo(Cards.c6, Cards.d3),
    new Combo(Cards.c6, Cards.h3),
    new Combo(Cards.c6, Cards.s3),
    new Combo(Cards.d6, Cards.s3),
    new Combo(Cards.d6, Cards.h3),
    new Combo(Cards.d6, Cards.c3)
  ),

  o62: new Hand(
    '62o',
    new Combo(Cards.s6, Cards.h2),
    new Combo(Cards.s6, Cards.c2),
    new Combo(Cards.s6, Cards.d2),
    new Combo(Cards.h6, Cards.c2),
    new Combo(Cards.h6, Cards.d2),
    new Combo(Cards.h6, Cards.s2),
    new Combo(Cards.c6, Cards.d2),
    new Combo(Cards.c6, Cards.h2),
    new Combo(Cards.c6, Cards.s2),
    new Combo(Cards.d6, Cards.s2),
    new Combo(Cards.d6, Cards.h2),
    new Combo(Cards.d6, Cards.c2)
  ),

  // 5
  p55: new Hand(
    '55p',
    new Combo(Cards.s5, Cards.c5),
    new Combo(Cards.s5, Cards.h5),
    new Combo(Cards.s5, Cards.d5),
    new Combo(Cards.c5, Cards.h5),
    new Combo(Cards.c5, Cards.d5),
    new Combo(Cards.h5, Cards.d5)
  ),

  s54: new Hand(
    '54s',
    new Combo(Cards.s5, Cards.s4),
    new Combo(Cards.h5, Cards.h4),
    new Combo(Cards.c5, Cards.c4),
    new Combo(Cards.d5, Cards.d4)
  ),

  s53: new Hand(
    '53s',
    new Combo(Cards.s5, Cards.s3),
    new Combo(Cards.h5, Cards.h3),
    new Combo(Cards.c5, Cards.c3),
    new Combo(Cards.d5, Cards.d3)
  ),

  s52: new Hand(
    '52s',
    new Combo(Cards.s5, Cards.s2),
    new Combo(Cards.h5, Cards.h2),
    new Combo(Cards.c5, Cards.c2),
    new Combo(Cards.d5, Cards.d2)
  ),

  o54: new Hand(
    '54o',
    new Combo(Cards.s5, Cards.h4),
    new Combo(Cards.s5, Cards.c4),
    new Combo(Cards.s5, Cards.d4),
    new Combo(Cards.h5, Cards.c4),
    new Combo(Cards.h5, Cards.d4),
    new Combo(Cards.h5, Cards.s4),
    new Combo(Cards.c5, Cards.d4),
    new Combo(Cards.c5, Cards.h4),
    new Combo(Cards.c5, Cards.s4),
    new Combo(Cards.d5, Cards.s4),
    new Combo(Cards.d5, Cards.h4),
    new Combo(Cards.d5, Cards.c4)
  ),

  o53: new Hand(
    '53o',
    new Combo(Cards.s5, Cards.h3),
    new Combo(Cards.s5, Cards.c3),
    new Combo(Cards.s5, Cards.d3),
    new Combo(Cards.h5, Cards.c3),
    new Combo(Cards.h5, Cards.d3),
    new Combo(Cards.h5, Cards.s3),
    new Combo(Cards.c5, Cards.d3),
    new Combo(Cards.c5, Cards.h3),
    new Combo(Cards.c5, Cards.s3),
    new Combo(Cards.d5, Cards.s3),
    new Combo(Cards.d5, Cards.h3),
    new Combo(Cards.d5, Cards.c3)
  ),

  o52: new Hand(
    '52o',
    new Combo(Cards.s5, Cards.h2),
    new Combo(Cards.s5, Cards.c2),
    new Combo(Cards.s5, Cards.d2),
    new Combo(Cards.h5, Cards.c2),
    new Combo(Cards.h5, Cards.d2),
    new Combo(Cards.h5, Cards.s2),
    new Combo(Cards.c5, Cards.d2),
    new Combo(Cards.c5, Cards.h2),
    new Combo(Cards.c5, Cards.s2),
    new Combo(Cards.d5, Cards.s2),
    new Combo(Cards.d5, Cards.h2),
    new Combo(Cards.d5, Cards.c2)
  ),

  // 4
  p44: new Hand(
    '44p',
    new Combo(Cards.s4, Cards.c4),
    new Combo(Cards.s4, Cards.h4),
    new Combo(Cards.s4, Cards.d4),
    new Combo(Cards.c4, Cards.h4),
    new Combo(Cards.c4, Cards.d4),
    new Combo(Cards.h4, Cards.d4)
  ),

  s43: new Hand(
    '43s',
    new Combo(Cards.s4, Cards.s3),
    new Combo(Cards.h4, Cards.h3),
    new Combo(Cards.c4, Cards.c3),
    new Combo(Cards.d4, Cards.d3)
  ),

  s42: new Hand(
    '42s',
    new Combo(Cards.s4, Cards.s2),
    new Combo(Cards.h4, Cards.h2),
    new Combo(Cards.c4, Cards.c2),
    new Combo(Cards.d4, Cards.d2)
  ),

  o43: new Hand(
    '43o',
    new Combo(Cards.s4, Cards.h3),
    new Combo(Cards.s4, Cards.c3),
    new Combo(Cards.s4, Cards.d3),
    new Combo(Cards.h4, Cards.c3),
    new Combo(Cards.h4, Cards.d3),
    new Combo(Cards.h4, Cards.s3),
    new Combo(Cards.c4, Cards.d3),
    new Combo(Cards.c4, Cards.h3),
    new Combo(Cards.c4, Cards.s3),
    new Combo(Cards.d4, Cards.s3),
    new Combo(Cards.d4, Cards.h3),
    new Combo(Cards.d4, Cards.c3)
  ),

  o42: new Hand(
    '42o',
    new Combo(Cards.s4, Cards.h2),
    new Combo(Cards.s4, Cards.c2),
    new Combo(Cards.s4, Cards.d2),
    new Combo(Cards.h4, Cards.c2),
    new Combo(Cards.h4, Cards.d2),
    new Combo(Cards.h4, Cards.s2),
    new Combo(Cards.c4, Cards.d2),
    new Combo(Cards.c4, Cards.h2),
    new Combo(Cards.c4, Cards.s2),
    new Combo(Cards.d4, Cards.s2),
    new Combo(Cards.d4, Cards.h2),
    new Combo(Cards.d4, Cards.c2)
  ),

  // 3
  p33: new Hand(
    '33p',
    new Combo(Cards.s3, Cards.c3),
    new Combo(Cards.s3, Cards.h3),
    new Combo(Cards.s3, Cards.d3),
    new Combo(Cards.c3, Cards.h3),
    new Combo(Cards.c3, Cards.d3),
    new Combo(Cards.h3, Cards.d3)
  ),

  s32: new Hand(
    '32s',
    new Combo(Cards.s3, Cards.s2),
    new Combo(Cards.h3, Cards.h2),
    new Combo(Cards.c3, Cards.c2),
    new Combo(Cards.d3, Cards.d2)
  ),

  o32: new Hand(
    '32o',
    new Combo(Cards.s3, Cards.h2),
    new Combo(Cards.s3, Cards.c2),
    new Combo(Cards.s3, Cards.d2),
    new Combo(Cards.h3, Cards.c2),
    new Combo(Cards.h3, Cards.d2),
    new Combo(Cards.h3, Cards.s2),
    new Combo(Cards.c3, Cards.d2),
    new Combo(Cards.c3, Cards.h2),
    new Combo(Cards.c3, Cards.s2),
    new Combo(Cards.d3, Cards.s2),
    new Combo(Cards.d3, Cards.h2),
    new Combo(Cards.d3, Cards.c2)
  ),

  p22: new Hand(
    '22p',
    new Combo(Cards.s2, Cards.c2),
    new Combo(Cards.s2, Cards.h2),
    new Combo(Cards.s2, Cards.d2),
    new Combo(Cards.c2, Cards.h2),
    new Combo(Cards.c2, Cards.d2),
    new Combo(Cards.h2, Cards.d2)
  )
}
