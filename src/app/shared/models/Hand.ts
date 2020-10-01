import {Combo} from './Combo';
import {Card} from './Cards';
import {HandComboModel} from './HandComboModel';

export class Hand {
  static pAA = new HandComboModel(
    'AA',
    new Combo(Card.sA, Card.cA),
    new Combo(Card.sA, Card.hA),
    new Combo(Card.sA, Card.dA),
    new Combo(Card.cA, Card.hA),
    new Combo(Card.cA, Card.dA),
    new Combo(Card.hA, Card.dA)
  );

  static sAK = new HandComboModel(
    'AKs',
    new Combo(Card.sA, Card.sK),
    new Combo(Card.hA, Card.hK),
    new Combo(Card.cA, Card.cK),
    new Combo(Card.dA, Card.dK)
  );

  static sAQ = new HandComboModel(
    'AQs',
    new Combo(Card.sA, Card.sQ),
    new Combo(Card.hA, Card.hQ),
    new Combo(Card.cA, Card.cQ),
    new Combo(Card.dA, Card.dQ)
  );

  static sAJ = new HandComboModel(
    'AJs',
    new Combo(Card.sA, Card.sJ),
    new Combo(Card.hA, Card.hJ),
    new Combo(Card.cA, Card.cJ),
    new Combo(Card.dA, Card.dJ)
  );

  static sAT = new HandComboModel(
    'ATs',
    new Combo(Card.sA, Card.sT),
    new Combo(Card.hA, Card.hT),
    new Combo(Card.cA, Card.cT),
    new Combo(Card.dA, Card.dT)
  );

  static sA9 = new HandComboModel(
    'A9s',
    new Combo(Card.sA, Card.s9),
    new Combo(Card.hA, Card.h9),
    new Combo(Card.cA, Card.c9),
    new Combo(Card.dA, Card.d9),
  );

  static sA8 = new HandComboModel(
    'A8s',
    new Combo(Card.sA, Card.s8),
    new Combo(Card.hA, Card.h8),
    new Combo(Card.cA, Card.c8),
    new Combo(Card.dA, Card.d8)
  );

  static sA7 = new HandComboModel(
    'A7s',
    new Combo(Card.sA, Card.s7),
    new Combo(Card.hA, Card.h7),
    new Combo(Card.cA, Card.c7),
    new Combo(Card.dA, Card.d7),
  );

  static sA6 = new HandComboModel(
    'A6s',
    new Combo(Card.sA, Card.s6),
    new Combo(Card.hA, Card.h6),
    new Combo(Card.cA, Card.c6),
    new Combo(Card.dA, Card.d6)
  );

  static sA5 = new HandComboModel(
    'A5s',
    new Combo(Card.sA, Card.s5),
    new Combo(Card.hA, Card.h5),
    new Combo(Card.cA, Card.c5),
    new Combo(Card.dA, Card.d5)
  );

  static sA4 = new HandComboModel(
    'A4s',
    new Combo(Card.sA, Card.s4),
    new Combo(Card.hA, Card.h4),
    new Combo(Card.cA, Card.c4),
    new Combo(Card.dA, Card.d4),
  );

  static sA3 = new HandComboModel(
    'A3s',
    new Combo(Card.sA, Card.s3),
    new Combo(Card.hA, Card.h3),
    new Combo(Card.cA, Card.c3),
    new Combo(Card.dA, Card.d3),
  );

  static sA2 = new HandComboModel(
    'A2s',
    new Combo(Card.sA, Card.s2),
    new Combo(Card.hA, Card.h2),
    new Combo(Card.cA, Card.c2),
    new Combo(Card.dA, Card.d2)
  );

  static oAK = new HandComboModel(
    'AKo',
    new Combo(Card.sA, Card.hK),
    new Combo(Card.sA, Card.cK),
    new Combo(Card.sA, Card.dK),
    new Combo(Card.hA, Card.cK),
    new Combo(Card.hA, Card.dK),
    new Combo(Card.hA, Card.sK),
    new Combo(Card.cA, Card.dK),
    new Combo(Card.cA, Card.hK),
    new Combo(Card.cA, Card.sK),
    new Combo(Card.dA, Card.sK),
    new Combo(Card.dA, Card.hK),
    new Combo(Card.dA, Card.cK)
  );

  static oAQ = new HandComboModel(
    'AQo',
    new Combo(Card.sA, Card.hQ),
    new Combo(Card.sA, Card.cQ),
    new Combo(Card.sA, Card.dQ),
    new Combo(Card.hA, Card.cQ),
    new Combo(Card.hA, Card.dQ),
    new Combo(Card.hA, Card.sQ),
    new Combo(Card.cA, Card.dQ),
    new Combo(Card.cA, Card.hQ),
    new Combo(Card.cA, Card.sQ),
    new Combo(Card.dA, Card.sQ),
    new Combo(Card.dA, Card.hQ),
    new Combo(Card.dA, Card.cQ)
  );

  static oAJ = new HandComboModel(
    'AJo',
    new Combo(Card.sA, Card.hJ),
    new Combo(Card.sA, Card.cJ),
    new Combo(Card.sA, Card.dJ),
    new Combo(Card.hA, Card.cJ),
    new Combo(Card.hA, Card.dJ),
    new Combo(Card.hA, Card.sJ),
    new Combo(Card.cA, Card.dJ),
    new Combo(Card.cA, Card.hJ),
    new Combo(Card.cA, Card.sJ),
    new Combo(Card.dA, Card.sJ),
    new Combo(Card.dA, Card.hJ),
    new Combo(Card.dA, Card.cJ)
  );

  static oAT = new HandComboModel(
    'ATo',
    new Combo(Card.sA, Card.hT),
    new Combo(Card.sA, Card.cT),
    new Combo(Card.sA, Card.dT),
    new Combo(Card.hA, Card.cT),
    new Combo(Card.hA, Card.dT),
    new Combo(Card.hA, Card.sT),
    new Combo(Card.cA, Card.dT),
    new Combo(Card.cA, Card.hT),
    new Combo(Card.cA, Card.sT),
    new Combo(Card.dA, Card.sT),
    new Combo(Card.dA, Card.hT),
    new Combo(Card.dA, Card.cT)
  );

  static oA9 = new HandComboModel(
    'A9o',
    new Combo(Card.sA, Card.h9),
    new Combo(Card.sA, Card.c9),
    new Combo(Card.sA, Card.d9),
    new Combo(Card.hA, Card.c9),
    new Combo(Card.hA, Card.d9),
    new Combo(Card.hA, Card.s9),
    new Combo(Card.cA, Card.d9),
    new Combo(Card.cA, Card.h9),
    new Combo(Card.cA, Card.s9),
    new Combo(Card.dA, Card.s9),
    new Combo(Card.dA, Card.h9),
    new Combo(Card.dA, Card.c9)
  );

  static oA8 = new HandComboModel(
    'A8o',
    new Combo(Card.sA, Card.h8),
    new Combo(Card.sA, Card.c8),
    new Combo(Card.sA, Card.d8),
    new Combo(Card.hA, Card.c8),
    new Combo(Card.hA, Card.d8),
    new Combo(Card.hA, Card.s8),
    new Combo(Card.cA, Card.d8),
    new Combo(Card.cA, Card.h8),
    new Combo(Card.cA, Card.s8),
    new Combo(Card.dA, Card.s8),
    new Combo(Card.dA, Card.h8),
    new Combo(Card.dA, Card.c8)
  );

  static oA7 = new HandComboModel(
    'A7o',
    new Combo(Card.sA, Card.h7),
    new Combo(Card.sA, Card.c7),
    new Combo(Card.sA, Card.d7),
    new Combo(Card.hA, Card.c7),
    new Combo(Card.hA, Card.d7),
    new Combo(Card.hA, Card.s7),
    new Combo(Card.cA, Card.d7),
    new Combo(Card.cA, Card.h7),
    new Combo(Card.cA, Card.s7),
    new Combo(Card.dA, Card.s7),
    new Combo(Card.dA, Card.h7),
    new Combo(Card.dA, Card.c7)
  );

  static oA6 = new HandComboModel(
    'A6o',
    new Combo(Card.sA, Card.h6),
    new Combo(Card.sA, Card.c6),
    new Combo(Card.sA, Card.d6),
    new Combo(Card.hA, Card.c6),
    new Combo(Card.hA, Card.d6),
    new Combo(Card.hA, Card.s6),
    new Combo(Card.cA, Card.d6),
    new Combo(Card.cA, Card.h6),
    new Combo(Card.cA, Card.s6),
    new Combo(Card.dA, Card.s6),
    new Combo(Card.dA, Card.h6),
    new Combo(Card.dA, Card.c6)
  );

  static oA5 = new HandComboModel(
    'A5o',
    new Combo(Card.sA, Card.h5),
    new Combo(Card.sA, Card.c5),
    new Combo(Card.sA, Card.d5),
    new Combo(Card.hA, Card.c5),
    new Combo(Card.hA, Card.d5),
    new Combo(Card.hA, Card.s5),
    new Combo(Card.cA, Card.d5),
    new Combo(Card.cA, Card.h5),
    new Combo(Card.cA, Card.s5),
    new Combo(Card.dA, Card.s5),
    new Combo(Card.dA, Card.h5),
    new Combo(Card.dA, Card.c5)
  );

  static oA4 = new HandComboModel(
    'A4o',
    new Combo(Card.sA, Card.h4),
    new Combo(Card.sA, Card.c4),
    new Combo(Card.sA, Card.d4),
    new Combo(Card.hA, Card.c4),
    new Combo(Card.hA, Card.d4),
    new Combo(Card.hA, Card.s4),
    new Combo(Card.cA, Card.d4),
    new Combo(Card.cA, Card.h4),
    new Combo(Card.cA, Card.s4),
    new Combo(Card.dA, Card.s4),
    new Combo(Card.dA, Card.h4),
    new Combo(Card.dA, Card.c4)
  );

  static oA3 = new HandComboModel(
    'A3o',
    new Combo(Card.sA, Card.h3),
    new Combo(Card.sA, Card.c3),
    new Combo(Card.sA, Card.d3),
    new Combo(Card.hA, Card.c3),
    new Combo(Card.hA, Card.d3),
    new Combo(Card.hA, Card.s3),
    new Combo(Card.cA, Card.d3),
    new Combo(Card.cA, Card.h3),
    new Combo(Card.cA, Card.s3),
    new Combo(Card.dA, Card.s3),
    new Combo(Card.dA, Card.h3),
    new Combo(Card.dA, Card.c3)
  );

  static oA2 = new HandComboModel(
    'A2o',
    new Combo(Card.sA, Card.h2),
    new Combo(Card.sA, Card.c2),
    new Combo(Card.sA, Card.d2),
    new Combo(Card.hA, Card.c2),
    new Combo(Card.hA, Card.d2),
    new Combo(Card.hA, Card.s2),
    new Combo(Card.cA, Card.d2),
    new Combo(Card.cA, Card.h2),
    new Combo(Card.cA, Card.s2),
    new Combo(Card.dA, Card.s2),
    new Combo(Card.dA, Card.h2),
    new Combo(Card.dA, Card.c2)
  );

  // K
  static pKK = new HandComboModel(
    'KK',
    new Combo(Card.sK, Card.cK),
    new Combo(Card.sK, Card.hK),
    new Combo(Card.sK, Card.dK),
    new Combo(Card.cK, Card.hK),
    new Combo(Card.cK, Card.dK),
    new Combo(Card.hK, Card.dK)
  );

  static sKQ = new HandComboModel(
    'KQs',
    new Combo(Card.sK, Card.sQ),
    new Combo(Card.hK, Card.hQ),
    new Combo(Card.cK, Card.cQ),
    new Combo(Card.dK, Card.dQ)
  );

  static sKJ = new HandComboModel(
    'KJs',
    new Combo(Card.sK, Card.sJ),
    new Combo(Card.hK, Card.hJ),
    new Combo(Card.cK, Card.cJ),
    new Combo(Card.dK, Card.dJ)
  );

  static sKT = new HandComboModel(
    'KTs',
    new Combo(Card.sK, Card.sT),
    new Combo(Card.hK, Card.hT),
    new Combo(Card.cK, Card.cT),
    new Combo(Card.dK, Card.dT)
  );

  static sK9 = new HandComboModel(
    'K9s',
    new Combo(Card.sK, Card.s9),
    new Combo(Card.hK, Card.h9),
    new Combo(Card.cK, Card.c9),
    new Combo(Card.dK, Card.d9)
  );

  static sK8 = new HandComboModel(
    'K8s',
    new Combo(Card.sK, Card.s8),
    new Combo(Card.hK, Card.h8),
    new Combo(Card.cK, Card.c8),
    new Combo(Card.dK, Card.d8)
  );

  static sK7 = new HandComboModel(
    'K7s',
    new Combo(Card.sK, Card.s7),
    new Combo(Card.hK, Card.h7),
    new Combo(Card.cK, Card.c7),
    new Combo(Card.dK, Card.d7)
  );

  static sK6 = new HandComboModel(
    'K6s',
    new Combo(Card.sK, Card.s6),
    new Combo(Card.hK, Card.h6),
    new Combo(Card.cK, Card.c6),
    new Combo(Card.dK, Card.d6)
  );

  static sK5 = new HandComboModel(
    'K5s',
    new Combo(Card.sK, Card.s5),
    new Combo(Card.hK, Card.h5),
    new Combo(Card.cK, Card.c5),
    new Combo(Card.dK, Card.d5)
  );

  static sK4 = new HandComboModel(
    'K4s',
    new Combo(Card.sK, Card.s4),
    new Combo(Card.hK, Card.h4),
    new Combo(Card.cK, Card.c4),
    new Combo(Card.dK, Card.d4)
  );

  static sK3 = new HandComboModel(
    'K3s',
    new Combo(Card.sK, Card.s3),
    new Combo(Card.hK, Card.h3),
    new Combo(Card.cK, Card.c3),
    new Combo(Card.dK, Card.d3)
  );

  static sK2 = new HandComboModel(
    'K2s',
    new Combo(Card.sK, Card.s2),
    new Combo(Card.hK, Card.h2),
    new Combo(Card.cK, Card.c2),
    new Combo(Card.dK, Card.d2)
  );

  static oKQ = new HandComboModel(
    'KQo',
    new Combo(Card.sK, Card.hQ),
    new Combo(Card.sK, Card.cQ),
    new Combo(Card.sK, Card.dQ),
    new Combo(Card.hK, Card.cQ),
    new Combo(Card.hK, Card.dQ),
    new Combo(Card.hK, Card.sQ),
    new Combo(Card.cK, Card.dQ),
    new Combo(Card.cK, Card.hQ),
    new Combo(Card.cK, Card.sQ),
    new Combo(Card.dK, Card.sQ),
    new Combo(Card.dK, Card.hQ),
    new Combo(Card.dK, Card.cQ)
  );

  static oKJ = new HandComboModel(
    'KJo',
    new Combo(Card.sK, Card.hJ),
    new Combo(Card.sK, Card.cJ),
    new Combo(Card.sK, Card.dJ),
    new Combo(Card.hK, Card.cJ),
    new Combo(Card.hK, Card.dJ),
    new Combo(Card.hK, Card.sJ),
    new Combo(Card.cK, Card.dJ),
    new Combo(Card.cK, Card.hJ),
    new Combo(Card.cK, Card.sJ),
    new Combo(Card.dK, Card.sJ),
    new Combo(Card.dK, Card.hJ),
    new Combo(Card.dK, Card.cJ)
  );

  static oKT = new HandComboModel(
    'KTo',
    new Combo(Card.sK, Card.hT),
    new Combo(Card.sK, Card.cT),
    new Combo(Card.sK, Card.dT),
    new Combo(Card.hK, Card.cT),
    new Combo(Card.hK, Card.dT),
    new Combo(Card.hK, Card.sT),
    new Combo(Card.cK, Card.dT),
    new Combo(Card.cK, Card.hT),
    new Combo(Card.cK, Card.sT),
    new Combo(Card.dK, Card.sT),
    new Combo(Card.dK, Card.hT),
    new Combo(Card.dK, Card.cT)
  );

  static oK9 = new HandComboModel(
    'K9o',
    new Combo(Card.sK, Card.h9),
    new Combo(Card.sK, Card.c9),
    new Combo(Card.sK, Card.d9),
    new Combo(Card.hK, Card.c9),
    new Combo(Card.hK, Card.d9),
    new Combo(Card.hK, Card.s9),
    new Combo(Card.cK, Card.d9),
    new Combo(Card.cK, Card.h9),
    new Combo(Card.cK, Card.s9),
    new Combo(Card.dK, Card.s9),
    new Combo(Card.dK, Card.h9),
    new Combo(Card.dK, Card.c9)
  );

  static oK8 = new HandComboModel(
    'K8o',
    new Combo(Card.sK, Card.h8),
    new Combo(Card.sK, Card.c8),
    new Combo(Card.sK, Card.d8),
    new Combo(Card.hK, Card.c8),
    new Combo(Card.hK, Card.d8),
    new Combo(Card.hK, Card.s8),
    new Combo(Card.cK, Card.d8),
    new Combo(Card.cK, Card.h8),
    new Combo(Card.cK, Card.s8),
    new Combo(Card.dK, Card.s8),
    new Combo(Card.dK, Card.h8),
    new Combo(Card.dK, Card.c8)
  );

  static oK7 = new HandComboModel(
    'K7o',
    new Combo(Card.sK, Card.h7),
    new Combo(Card.sK, Card.c7),
    new Combo(Card.sK, Card.d7),
    new Combo(Card.hK, Card.c7),
    new Combo(Card.hK, Card.d7),
    new Combo(Card.hK, Card.s7),
    new Combo(Card.cK, Card.d7),
    new Combo(Card.cK, Card.h7),
    new Combo(Card.cK, Card.s7),
    new Combo(Card.dK, Card.s7),
    new Combo(Card.dK, Card.h7),
    new Combo(Card.dK, Card.c7)
  );

  static oK6 = new HandComboModel(
    'K6o',
    new Combo(Card.sK, Card.h6),
    new Combo(Card.sK, Card.c6),
    new Combo(Card.sK, Card.d6),
    new Combo(Card.hK, Card.c6),
    new Combo(Card.hK, Card.d6),
    new Combo(Card.hK, Card.s6),
    new Combo(Card.cK, Card.d6),
    new Combo(Card.cK, Card.h6),
    new Combo(Card.cK, Card.s6),
    new Combo(Card.dK, Card.s6),
    new Combo(Card.dK, Card.h6),
    new Combo(Card.dK, Card.c6)
  );

  static oK5 = new HandComboModel(
    'K5o',
    new Combo(Card.sK, Card.h5),
    new Combo(Card.sK, Card.c5),
    new Combo(Card.sK, Card.d5),
    new Combo(Card.hK, Card.c5),
    new Combo(Card.hK, Card.d5),
    new Combo(Card.hK, Card.s5),
    new Combo(Card.cK, Card.d5),
    new Combo(Card.cK, Card.h5),
    new Combo(Card.cK, Card.s5),
    new Combo(Card.dK, Card.s5),
    new Combo(Card.dK, Card.h5),
    new Combo(Card.dK, Card.c5)
  );

  static oK4 = new HandComboModel(
    'K4o',
    new Combo(Card.sK, Card.h4),
    new Combo(Card.sK, Card.c4),
    new Combo(Card.sK, Card.d4),
    new Combo(Card.hK, Card.c4),
    new Combo(Card.hK, Card.d4),
    new Combo(Card.hK, Card.s4),
    new Combo(Card.cK, Card.d4),
    new Combo(Card.cK, Card.h4),
    new Combo(Card.cK, Card.s4),
    new Combo(Card.dK, Card.s4),
    new Combo(Card.dK, Card.h4),
    new Combo(Card.dK, Card.c4)
  );

  static oK3 = new HandComboModel(
    'K3o',
    new Combo(Card.sK, Card.h3),
    new Combo(Card.sK, Card.c3),
    new Combo(Card.sK, Card.d3),
    new Combo(Card.hK, Card.c3),
    new Combo(Card.hK, Card.d3),
    new Combo(Card.hK, Card.s3),
    new Combo(Card.cK, Card.d3),
    new Combo(Card.cK, Card.h3),
    new Combo(Card.cK, Card.s3),
    new Combo(Card.dK, Card.s3),
    new Combo(Card.dK, Card.h3),
    new Combo(Card.dK, Card.c3)
  );

  static oK2 = new HandComboModel(
    'K2o',
    new Combo(Card.sK, Card.h2),
    new Combo(Card.sK, Card.c2),
    new Combo(Card.sK, Card.d2),
    new Combo(Card.hK, Card.c2),
    new Combo(Card.hK, Card.d2),
    new Combo(Card.hK, Card.s2),
    new Combo(Card.cK, Card.d2),
    new Combo(Card.cK, Card.h2),
    new Combo(Card.cK, Card.s2),
    new Combo(Card.dK, Card.s2),
    new Combo(Card.dK, Card.h2),
    new Combo(Card.dK, Card.c2)
  );

  // Q
  static pQQ = new HandComboModel(
    'QQ',
    new Combo(Card.sQ, Card.cQ),
    new Combo(Card.sQ, Card.hQ),
    new Combo(Card.sQ, Card.dQ),
    new Combo(Card.cQ, Card.hQ),
    new Combo(Card.cQ, Card.dQ),
    new Combo(Card.hQ, Card.dQ)
  );

  static sQJ = new HandComboModel(
    'QJs',
    new Combo(Card.sQ, Card.sJ),
    new Combo(Card.hQ, Card.hJ),
    new Combo(Card.cQ, Card.cJ),
    new Combo(Card.dQ, Card.dJ)
  );

  static sQT = new HandComboModel(
    'QTs',
    new Combo(Card.sQ, Card.sT),
    new Combo(Card.hQ, Card.hT),
    new Combo(Card.cQ, Card.cT),
    new Combo(Card.dQ, Card.dT)
  );

  static sQ9 = new HandComboModel(
    'Q9s',
    new Combo(Card.sQ, Card.s9),
    new Combo(Card.hQ, Card.h9),
    new Combo(Card.cQ, Card.c9),
    new Combo(Card.dQ, Card.d9)
  );

  static sQ8 = new HandComboModel(
    'Q8s',
    new Combo(Card.sQ, Card.s8),
    new Combo(Card.hQ, Card.h8),
    new Combo(Card.cQ, Card.c8),
    new Combo(Card.dQ, Card.d8)
  );

  static sQ7 = new HandComboModel(
    'Q7s',
    new Combo(Card.sQ, Card.s7),
    new Combo(Card.hQ, Card.h7),
    new Combo(Card.cQ, Card.c7),
    new Combo(Card.dQ, Card.d7)
  );

  static sQ6 = new HandComboModel(
    'Q6s',
    new Combo(Card.sQ, Card.s6),
    new Combo(Card.hQ, Card.h6),
    new Combo(Card.cQ, Card.c6),
    new Combo(Card.dQ, Card.d6)
  );

  static sQ5 = new HandComboModel(
    'Q5s',
    new Combo(Card.sQ, Card.s5),
    new Combo(Card.hQ, Card.h5),
    new Combo(Card.cQ, Card.c5),
    new Combo(Card.dQ, Card.d5)
  );

  static sQ4 = new HandComboModel(
    'Q4s',
    new Combo(Card.sQ, Card.s4),
    new Combo(Card.hQ, Card.h4),
    new Combo(Card.cQ, Card.c4),
    new Combo(Card.dQ, Card.d4)
  );

  static sQ3 = new HandComboModel(
    'Q3s',
    new Combo(Card.sQ, Card.s3),
    new Combo(Card.hQ, Card.h3),
    new Combo(Card.cQ, Card.c3),
    new Combo(Card.dQ, Card.d3)
  );

  static sQ2 = new HandComboModel(
    'Q2s',
    new Combo(Card.sQ, Card.s2),
    new Combo(Card.hQ, Card.h2),
    new Combo(Card.cQ, Card.c2),
    new Combo(Card.dQ, Card.d2)
  );

  static oQJ = new HandComboModel(
    'QJo',
    new Combo(Card.sQ, Card.hJ),
    new Combo(Card.sQ, Card.cJ),
    new Combo(Card.sQ, Card.dJ),
    new Combo(Card.hQ, Card.cJ),
    new Combo(Card.hQ, Card.dJ),
    new Combo(Card.hQ, Card.sJ),
    new Combo(Card.cQ, Card.dJ),
    new Combo(Card.cQ, Card.hJ),
    new Combo(Card.cQ, Card.sJ),
    new Combo(Card.dQ, Card.sJ),
    new Combo(Card.dQ, Card.hJ),
    new Combo(Card.dQ, Card.cJ)
  );

  static oQT = new HandComboModel(
    'QTo',
    new Combo(Card.sQ, Card.hT),
    new Combo(Card.sQ, Card.cT),
    new Combo(Card.sQ, Card.dT),
    new Combo(Card.hQ, Card.cT),
    new Combo(Card.hQ, Card.dT),
    new Combo(Card.hQ, Card.sT),
    new Combo(Card.cQ, Card.dT),
    new Combo(Card.cQ, Card.hT),
    new Combo(Card.cQ, Card.sT),
    new Combo(Card.dQ, Card.sT),
    new Combo(Card.dQ, Card.hT),
    new Combo(Card.dQ, Card.cT)
  );

  static oQ9 = new HandComboModel(
    'Q9o',
    new Combo(Card.sQ, Card.h9),
    new Combo(Card.sQ, Card.c9),
    new Combo(Card.sQ, Card.d9),
    new Combo(Card.hQ, Card.c9),
    new Combo(Card.hQ, Card.d9),
    new Combo(Card.hQ, Card.s9),
    new Combo(Card.cQ, Card.d9),
    new Combo(Card.cQ, Card.h9),
    new Combo(Card.cQ, Card.s9),
    new Combo(Card.dQ, Card.s9),
    new Combo(Card.dQ, Card.h9),
    new Combo(Card.dQ, Card.c9)
  );

  static oQ8 = new HandComboModel(
    'Q8o',
    new Combo(Card.sQ, Card.h8),
    new Combo(Card.sQ, Card.c8),
    new Combo(Card.sQ, Card.d8),
    new Combo(Card.hQ, Card.c8),
    new Combo(Card.hQ, Card.d8),
    new Combo(Card.hQ, Card.s8),
    new Combo(Card.cQ, Card.d8),
    new Combo(Card.cQ, Card.h8),
    new Combo(Card.cQ, Card.s8),
    new Combo(Card.dQ, Card.s8),
    new Combo(Card.dQ, Card.h8),
    new Combo(Card.dQ, Card.c8)
  );

  static oQ7 = new HandComboModel(
    'Q7o',
    new Combo(Card.sQ, Card.h7),
    new Combo(Card.sQ, Card.c7),
    new Combo(Card.sQ, Card.d7),
    new Combo(Card.hQ, Card.c7),
    new Combo(Card.hQ, Card.d7),
    new Combo(Card.hQ, Card.s7),
    new Combo(Card.cQ, Card.d7),
    new Combo(Card.cQ, Card.h7),
    new Combo(Card.cQ, Card.s7),
    new Combo(Card.dQ, Card.s7),
    new Combo(Card.dQ, Card.h7),
    new Combo(Card.dQ, Card.c7)
  );

  static oQ6 = new HandComboModel(
    'Q6o',
    new Combo(Card.sQ, Card.h6),
    new Combo(Card.sQ, Card.c6),
    new Combo(Card.sQ, Card.d6),
    new Combo(Card.hQ, Card.c6),
    new Combo(Card.hQ, Card.d6),
    new Combo(Card.hQ, Card.s6),
    new Combo(Card.cQ, Card.d6),
    new Combo(Card.cQ, Card.h6),
    new Combo(Card.cQ, Card.s6),
    new Combo(Card.dQ, Card.s6),
    new Combo(Card.dQ, Card.h6),
    new Combo(Card.dQ, Card.c6)
  );

  static oQ5 = new HandComboModel(
    'Q5o',
    new Combo(Card.sQ, Card.h5),
    new Combo(Card.sQ, Card.c5),
    new Combo(Card.sQ, Card.d5),
    new Combo(Card.hQ, Card.c5),
    new Combo(Card.hQ, Card.d5),
    new Combo(Card.hQ, Card.s5),
    new Combo(Card.cQ, Card.d5),
    new Combo(Card.cQ, Card.h5),
    new Combo(Card.cQ, Card.s5),
    new Combo(Card.dQ, Card.s5),
    new Combo(Card.dQ, Card.h5),
    new Combo(Card.dQ, Card.c5)
  );

  static oQ4 = new HandComboModel(
    'Q4o',
    new Combo(Card.sQ, Card.h4),
    new Combo(Card.sQ, Card.c4),
    new Combo(Card.sQ, Card.d4),
    new Combo(Card.hQ, Card.c4),
    new Combo(Card.hQ, Card.d4),
    new Combo(Card.hQ, Card.s4),
    new Combo(Card.cQ, Card.d4),
    new Combo(Card.cQ, Card.h4),
    new Combo(Card.cQ, Card.s4),
    new Combo(Card.dQ, Card.s4),
    new Combo(Card.dQ, Card.h4),
    new Combo(Card.dQ, Card.c4)
  );

  static oQ3 = new HandComboModel(
    'Q3o',
    new Combo(Card.sQ, Card.h3),
    new Combo(Card.sQ, Card.c3),
    new Combo(Card.sQ, Card.d3),
    new Combo(Card.hQ, Card.c3),
    new Combo(Card.hQ, Card.d3),
    new Combo(Card.hQ, Card.s3),
    new Combo(Card.cQ, Card.d3),
    new Combo(Card.cQ, Card.h3),
    new Combo(Card.cQ, Card.s3),
    new Combo(Card.dQ, Card.s3),
    new Combo(Card.dQ, Card.h3),
    new Combo(Card.dQ, Card.c3)
  );

  static oQ2 = new HandComboModel(
    'Q2o',
    new Combo(Card.sQ, Card.h2),
    new Combo(Card.sQ, Card.c2),
    new Combo(Card.sQ, Card.d2),
    new Combo(Card.hQ, Card.c2),
    new Combo(Card.hQ, Card.d2),
    new Combo(Card.hQ, Card.s2),
    new Combo(Card.cQ, Card.d2),
    new Combo(Card.cQ, Card.h2),
    new Combo(Card.cQ, Card.s2),
    new Combo(Card.dQ, Card.s2),
    new Combo(Card.dQ, Card.h2),
    new Combo(Card.dQ, Card.c2)
  );

  // J
  static pJJ = new HandComboModel(
    'JJ',
    new Combo(Card.sJ, Card.cJ),
    new Combo(Card.sJ, Card.hJ),
    new Combo(Card.sJ, Card.dJ),
    new Combo(Card.cJ, Card.hJ),
    new Combo(Card.cJ, Card.dJ),
    new Combo(Card.hJ, Card.dJ)
  );

  static sJT = new HandComboModel(
    'JTs',
    new Combo(Card.sJ, Card.sT),
    new Combo(Card.hJ, Card.hT),
    new Combo(Card.cJ, Card.cT),
    new Combo(Card.dJ, Card.dT)
  );

  static sJ9 = new HandComboModel(
    'J9s',
    new Combo(Card.sJ, Card.s9),
    new Combo(Card.hJ, Card.h9),
    new Combo(Card.cJ, Card.c9),
    new Combo(Card.dJ, Card.d9)
  );

  static sJ8 = new HandComboModel(
    'J8s',
    new Combo(Card.sJ, Card.s8),
    new Combo(Card.hJ, Card.h8),
    new Combo(Card.cJ, Card.c8),
    new Combo(Card.dJ, Card.d8)
  );

  static sJ7 = new HandComboModel(
    'J7s',
    new Combo(Card.sJ, Card.s7),
    new Combo(Card.hJ, Card.h7),
    new Combo(Card.cJ, Card.c7),
    new Combo(Card.dJ, Card.d7)
  );

  static sJ6 = new HandComboModel(
    'J6s',
    new Combo(Card.sJ, Card.s6),
    new Combo(Card.hJ, Card.h6),
    new Combo(Card.cJ, Card.c6),
    new Combo(Card.dJ, Card.d6)
  );

  static sJ5 = new HandComboModel(
    'J5s',
    new Combo(Card.sJ, Card.s5),
    new Combo(Card.hJ, Card.h5),
    new Combo(Card.cJ, Card.c5),
    new Combo(Card.dJ, Card.d5)
  );

  static sJ4 = new HandComboModel(
    'J4s',
    new Combo(Card.sJ, Card.s4),
    new Combo(Card.hJ, Card.h4),
    new Combo(Card.cJ, Card.c4),
    new Combo(Card.dJ, Card.d4)
  );

  static sJ3 = new HandComboModel(
    'J3s',
    new Combo(Card.sJ, Card.s3),
    new Combo(Card.hJ, Card.h3),
    new Combo(Card.cJ, Card.c3),
    new Combo(Card.dJ, Card.d3)
  );

  static sJ2 = new HandComboModel(
    'J2s',
    new Combo(Card.sJ, Card.s2),
    new Combo(Card.hJ, Card.h2),
    new Combo(Card.cJ, Card.c2),
    new Combo(Card.dJ, Card.d2)
  );

  static oJT = new HandComboModel(
    'JTo',
    new Combo(Card.sJ, Card.hT),
    new Combo(Card.sJ, Card.cT),
    new Combo(Card.sJ, Card.dT),
    new Combo(Card.hJ, Card.cT),
    new Combo(Card.hJ, Card.dT),
    new Combo(Card.hJ, Card.sT),
    new Combo(Card.cJ, Card.dT),
    new Combo(Card.cJ, Card.hT),
    new Combo(Card.cJ, Card.sT),
    new Combo(Card.dJ, Card.sT),
    new Combo(Card.dJ, Card.hT),
    new Combo(Card.dJ, Card.cT)
  );

  static oJ9 = new HandComboModel(
    'J9o',
    new Combo(Card.sJ, Card.h9),
    new Combo(Card.sJ, Card.c9),
    new Combo(Card.sJ, Card.d9),
    new Combo(Card.hJ, Card.c9),
    new Combo(Card.hJ, Card.d9),
    new Combo(Card.hJ, Card.s9),
    new Combo(Card.cJ, Card.d9),
    new Combo(Card.cJ, Card.h9),
    new Combo(Card.cJ, Card.s9),
    new Combo(Card.dJ, Card.s9),
    new Combo(Card.dJ, Card.h9),
    new Combo(Card.dJ, Card.c9)
  );

  static oJ8 = new HandComboModel(
    'J8o',
    new Combo(Card.sJ, Card.h8),
    new Combo(Card.sJ, Card.c8),
    new Combo(Card.sJ, Card.d8),
    new Combo(Card.hJ, Card.c8),
    new Combo(Card.hJ, Card.d8),
    new Combo(Card.hJ, Card.s8),
    new Combo(Card.cJ, Card.d8),
    new Combo(Card.cJ, Card.h8),
    new Combo(Card.cJ, Card.s8),
    new Combo(Card.dJ, Card.s8),
    new Combo(Card.dJ, Card.h8),
    new Combo(Card.dJ, Card.c8)
  );

  static oJ7 = new HandComboModel(
    'J7o',
    new Combo(Card.sJ, Card.h7),
    new Combo(Card.sJ, Card.c7),
    new Combo(Card.sJ, Card.d7),
    new Combo(Card.hJ, Card.c7),
    new Combo(Card.hJ, Card.d7),
    new Combo(Card.hJ, Card.s7),
    new Combo(Card.cJ, Card.d7),
    new Combo(Card.cJ, Card.h7),
    new Combo(Card.cJ, Card.s7),
    new Combo(Card.dJ, Card.s7),
    new Combo(Card.dJ, Card.h7),
    new Combo(Card.dJ, Card.c7)
  );

  static oJ6 = new HandComboModel(
    'J6o',
    new Combo(Card.sJ, Card.h6),
    new Combo(Card.sJ, Card.c6),
    new Combo(Card.sJ, Card.d6),
    new Combo(Card.hJ, Card.c6),
    new Combo(Card.hJ, Card.d6),
    new Combo(Card.hJ, Card.s6),
    new Combo(Card.cJ, Card.d6),
    new Combo(Card.cJ, Card.h6),
    new Combo(Card.cJ, Card.s6),
    new Combo(Card.dJ, Card.s6),
    new Combo(Card.dJ, Card.h6),
    new Combo(Card.dJ, Card.c6)
  );

  static oJ5 = new HandComboModel(
    'J5o',
    new Combo(Card.sJ, Card.h5),
    new Combo(Card.sJ, Card.c5),
    new Combo(Card.sJ, Card.d5),
    new Combo(Card.hJ, Card.c5),
    new Combo(Card.hJ, Card.d5),
    new Combo(Card.hJ, Card.s5),
    new Combo(Card.cJ, Card.d5),
    new Combo(Card.cJ, Card.h5),
    new Combo(Card.cJ, Card.s5),
    new Combo(Card.dJ, Card.s5),
    new Combo(Card.dJ, Card.h5),
    new Combo(Card.dJ, Card.c5)
  );

  static oJ4 = new HandComboModel(
    'J4o',
    new Combo(Card.sJ, Card.h4),
    new Combo(Card.sJ, Card.c4),
    new Combo(Card.sJ, Card.d4),
    new Combo(Card.hJ, Card.c4),
    new Combo(Card.hJ, Card.d4),
    new Combo(Card.hJ, Card.s4),
    new Combo(Card.cJ, Card.d4),
    new Combo(Card.cJ, Card.h4),
    new Combo(Card.cJ, Card.s4),
    new Combo(Card.dJ, Card.s4),
    new Combo(Card.dJ, Card.h4),
    new Combo(Card.dJ, Card.c4)
  );

  static oJ3 = new HandComboModel(
    'J3o',
    new Combo(Card.sJ, Card.h3),
    new Combo(Card.sJ, Card.c3),
    new Combo(Card.sJ, Card.d3),
    new Combo(Card.hJ, Card.c3),
    new Combo(Card.hJ, Card.d3),
    new Combo(Card.hJ, Card.s3),
    new Combo(Card.cJ, Card.d3),
    new Combo(Card.cJ, Card.h3),
    new Combo(Card.cJ, Card.s3),
    new Combo(Card.dJ, Card.s3),
    new Combo(Card.dJ, Card.h3),
    new Combo(Card.dJ, Card.c3)
  );

  static oJ2 = new HandComboModel(
    'J2o',
    new Combo(Card.sJ, Card.h2),
    new Combo(Card.sJ, Card.c2),
    new Combo(Card.sJ, Card.d2),
    new Combo(Card.hJ, Card.c2),
    new Combo(Card.hJ, Card.d2),
    new Combo(Card.hJ, Card.s2),
    new Combo(Card.cJ, Card.d2),
    new Combo(Card.cJ, Card.h2),
    new Combo(Card.cJ, Card.s2),
    new Combo(Card.dJ, Card.s2),
    new Combo(Card.dJ, Card.h2),
    new Combo(Card.dJ, Card.c2)
  );

  // T
  static pTT = new HandComboModel(
    'TT',
    new Combo(Card.sT, Card.cT),
    new Combo(Card.sT, Card.hT),
    new Combo(Card.sT, Card.dT),
    new Combo(Card.cT, Card.hT),
    new Combo(Card.cT, Card.dT),
    new Combo(Card.hT, Card.dT)
  );

  static sT9 = new HandComboModel(
    'T9s',
    new Combo(Card.sT, Card.s9),
    new Combo(Card.hT, Card.h9),
    new Combo(Card.cT, Card.c9),
    new Combo(Card.dT, Card.d9)
  );

  static sT8 = new HandComboModel(
    'T8s',
    new Combo(Card.sT, Card.s8),
    new Combo(Card.hT, Card.h8),
    new Combo(Card.cT, Card.c8),
    new Combo(Card.dT, Card.d8)
  );

  static sT7 = new HandComboModel(
    'T7s',
    new Combo(Card.sT, Card.s7),
    new Combo(Card.hT, Card.h7),
    new Combo(Card.cT, Card.c7),
    new Combo(Card.dT, Card.d7)
  );

  static sT6 = new HandComboModel(
    'T6s',
    new Combo(Card.sT, Card.s6),
    new Combo(Card.hT, Card.h6),
    new Combo(Card.cT, Card.c6),
    new Combo(Card.dT, Card.d6)
  );

  static sT5 = new HandComboModel(
    'T5s',
    new Combo(Card.sT, Card.s5),
    new Combo(Card.hT, Card.h5),
    new Combo(Card.cT, Card.c5),
    new Combo(Card.dT, Card.d5)
  );

  static sT4 = new HandComboModel(
    'T4s',
    new Combo(Card.sT, Card.s4),
    new Combo(Card.hT, Card.h4),
    new Combo(Card.cT, Card.c4),
    new Combo(Card.dT, Card.d4)
  );

  static sT3 = new HandComboModel(
    'T3s',
    new Combo(Card.sT, Card.s3),
    new Combo(Card.hT, Card.h3),
    new Combo(Card.cT, Card.c3),
    new Combo(Card.dT, Card.d3)
  );

  static sT2 = new HandComboModel(
    'T2s',
    new Combo(Card.sT, Card.s2),
    new Combo(Card.hT, Card.h2),
    new Combo(Card.cT, Card.c2),
    new Combo(Card.dT, Card.d2)
  );

  static oT9 = new HandComboModel(
    'T9o',
    new Combo(Card.sT, Card.h9),
    new Combo(Card.sT, Card.c9),
    new Combo(Card.sT, Card.d9),
    new Combo(Card.hT, Card.c9),
    new Combo(Card.hT, Card.d9),
    new Combo(Card.hT, Card.s9),
    new Combo(Card.cT, Card.d9),
    new Combo(Card.cT, Card.h9),
    new Combo(Card.cT, Card.s9),
    new Combo(Card.dT, Card.s9),
    new Combo(Card.dT, Card.h9),
    new Combo(Card.dT, Card.c9)
  );

  static oT8 = new HandComboModel(
    'T8o',
    new Combo(Card.sT, Card.h8),
    new Combo(Card.sT, Card.c8),
    new Combo(Card.sT, Card.d8),
    new Combo(Card.hT, Card.c8),
    new Combo(Card.hT, Card.d8),
    new Combo(Card.hT, Card.s8),
    new Combo(Card.cT, Card.d8),
    new Combo(Card.cT, Card.h8),
    new Combo(Card.cT, Card.s8),
    new Combo(Card.dT, Card.s8),
    new Combo(Card.dT, Card.h8),
    new Combo(Card.dT, Card.c8)
  );

  static oT7 = new HandComboModel(
    'T7o',
    new Combo(Card.sT, Card.h7),
    new Combo(Card.sT, Card.c7),
    new Combo(Card.sT, Card.d7),
    new Combo(Card.hT, Card.c7),
    new Combo(Card.hT, Card.d7),
    new Combo(Card.hT, Card.s7),
    new Combo(Card.cT, Card.d7),
    new Combo(Card.cT, Card.h7),
    new Combo(Card.cT, Card.s7),
    new Combo(Card.dT, Card.s7),
    new Combo(Card.dT, Card.h7),
    new Combo(Card.dT, Card.c7)
  );

  static oT6 = new HandComboModel(
    'T6o',
    new Combo(Card.sT, Card.h6),
    new Combo(Card.sT, Card.c6),
    new Combo(Card.sT, Card.d6),
    new Combo(Card.hT, Card.c6),
    new Combo(Card.hT, Card.d6),
    new Combo(Card.hT, Card.s6),
    new Combo(Card.cT, Card.d6),
    new Combo(Card.cT, Card.h6),
    new Combo(Card.cT, Card.s6),
    new Combo(Card.dT, Card.s6),
    new Combo(Card.dT, Card.h6),
    new Combo(Card.dT, Card.c6)
  );

  static oT5 = new HandComboModel(
    'T5o',
    new Combo(Card.sT, Card.h5),
    new Combo(Card.sT, Card.c5),
    new Combo(Card.sT, Card.d5),
    new Combo(Card.hT, Card.c5),
    new Combo(Card.hT, Card.d5),
    new Combo(Card.hT, Card.s5),
    new Combo(Card.cT, Card.d5),
    new Combo(Card.cT, Card.h5),
    new Combo(Card.cT, Card.s5),
    new Combo(Card.dT, Card.s5),
    new Combo(Card.dT, Card.h5),
    new Combo(Card.dT, Card.c5)
  );

  static oT4 = new HandComboModel(
    'T4o',
    new Combo(Card.sT, Card.h4),
    new Combo(Card.sT, Card.c4),
    new Combo(Card.sT, Card.d4),
    new Combo(Card.hT, Card.c4),
    new Combo(Card.hT, Card.d4),
    new Combo(Card.hT, Card.s4),
    new Combo(Card.cT, Card.d4),
    new Combo(Card.cT, Card.h4),
    new Combo(Card.cT, Card.s4),
    new Combo(Card.dT, Card.s4),
    new Combo(Card.dT, Card.h4),
    new Combo(Card.dT, Card.c4)
  );

  static oT3 = new HandComboModel(
    'T3o',
    new Combo(Card.sT, Card.h3),
    new Combo(Card.sT, Card.c3),
    new Combo(Card.sT, Card.d3),
    new Combo(Card.hT, Card.c3),
    new Combo(Card.hT, Card.d3),
    new Combo(Card.hT, Card.s3),
    new Combo(Card.cT, Card.d3),
    new Combo(Card.cT, Card.h3),
    new Combo(Card.cT, Card.s3),
    new Combo(Card.dT, Card.s3),
    new Combo(Card.dT, Card.h3),
    new Combo(Card.dT, Card.c3)
  );

  static oT2 = new HandComboModel(
    'T2o',
    new Combo(Card.sT, Card.h2),
    new Combo(Card.sT, Card.c2),
    new Combo(Card.sT, Card.d2),
    new Combo(Card.hT, Card.c2),
    new Combo(Card.hT, Card.d2),
    new Combo(Card.hT, Card.s2),
    new Combo(Card.cT, Card.d2),
    new Combo(Card.cJ, Card.h2),
    new Combo(Card.cJ, Card.s2),
    new Combo(Card.dJ, Card.s2),
    new Combo(Card.dJ, Card.h2),
    new Combo(Card.dJ, Card.c2)
  );

  // 9
  static p99 = new HandComboModel(
    '99',
    new Combo(Card.s9, Card.c9),
    new Combo(Card.s9, Card.h9),
    new Combo(Card.s9, Card.d9),
    new Combo(Card.c9, Card.h9),
    new Combo(Card.c9, Card.d9),
    new Combo(Card.h9, Card.d9)
  );

  static s98 = new HandComboModel(
    '98s',
    new Combo(Card.s9, Card.s8),
    new Combo(Card.h9, Card.h8),
    new Combo(Card.c9, Card.c8),
    new Combo(Card.d9, Card.d8)
  );

  static s97 = new HandComboModel(
    '97s',
    new Combo(Card.s9, Card.s7),
    new Combo(Card.h9, Card.h7),
    new Combo(Card.c9, Card.c7),
    new Combo(Card.d9, Card.d7)
  );

  static s96 = new HandComboModel(
    '96s',
    new Combo(Card.s9, Card.s6),
    new Combo(Card.h9, Card.h6),
    new Combo(Card.c9, Card.c6),
    new Combo(Card.d9, Card.d6)
  );

  static s95 = new HandComboModel(
    '95s',
    new Combo(Card.s9, Card.s5),
    new Combo(Card.h9, Card.h5),
    new Combo(Card.c9, Card.c5),
    new Combo(Card.d9, Card.d5)
  );

  static s94 = new HandComboModel(
    '94s',
    new Combo(Card.s9, Card.s4),
    new Combo(Card.h9, Card.h4),
    new Combo(Card.c9, Card.c4),
    new Combo(Card.d9, Card.d4)
  );

  static s93 = new HandComboModel(
    '93s',
    new Combo(Card.s9, Card.s3),
    new Combo(Card.h9, Card.h3),
    new Combo(Card.c9, Card.c3),
    new Combo(Card.d9, Card.d3)
  );

  static s92 = new HandComboModel(
    '92s',
    new Combo(Card.s9, Card.s2),
    new Combo(Card.h9, Card.h2),
    new Combo(Card.c9, Card.c2),
    new Combo(Card.d9, Card.d2)
  );

  static o98 = new HandComboModel(
    '98o',
    new Combo(Card.s9, Card.h8),
    new Combo(Card.s9, Card.c8),
    new Combo(Card.s9, Card.d8),
    new Combo(Card.h9, Card.c8),
    new Combo(Card.h9, Card.d8),
    new Combo(Card.h9, Card.s8),
    new Combo(Card.c9, Card.d8),
    new Combo(Card.c9, Card.h8),
    new Combo(Card.c9, Card.s8),
    new Combo(Card.d9, Card.s8),
    new Combo(Card.d9, Card.h8),
    new Combo(Card.d9, Card.c8)
  );

  static o97 = new HandComboModel(
    '97o',
    new Combo(Card.s9, Card.h7),
    new Combo(Card.s9, Card.c7),
    new Combo(Card.s9, Card.d7),
    new Combo(Card.h9, Card.c7),
    new Combo(Card.h9, Card.d7),
    new Combo(Card.h9, Card.s7),
    new Combo(Card.c9, Card.d7),
    new Combo(Card.c9, Card.h7),
    new Combo(Card.c9, Card.s7),
    new Combo(Card.d9, Card.s7),
    new Combo(Card.d9, Card.h7),
    new Combo(Card.d9, Card.c7)
  );

  static o96 = new HandComboModel(
    '96o',
    new Combo(Card.s9, Card.h6),
    new Combo(Card.s9, Card.c6),
    new Combo(Card.s9, Card.d6),
    new Combo(Card.h9, Card.c6),
    new Combo(Card.h9, Card.d6),
    new Combo(Card.h9, Card.s6),
    new Combo(Card.c9, Card.d6),
    new Combo(Card.c9, Card.h6),
    new Combo(Card.c9, Card.s6),
    new Combo(Card.d9, Card.s6),
    new Combo(Card.d9, Card.h6),
    new Combo(Card.d9, Card.c6)
  );

  static o95 = new HandComboModel(
    '95o',
    new Combo(Card.s9, Card.h5),
    new Combo(Card.s9, Card.c5),
    new Combo(Card.s9, Card.d5),
    new Combo(Card.h9, Card.c5),
    new Combo(Card.h9, Card.d5),
    new Combo(Card.h9, Card.s5),
    new Combo(Card.c9, Card.d5),
    new Combo(Card.c9, Card.h5),
    new Combo(Card.c9, Card.s5),
    new Combo(Card.d9, Card.s5),
    new Combo(Card.d9, Card.h5),
    new Combo(Card.d9, Card.c5)
  );

  static o94 = new HandComboModel(
    '94o',
    new Combo(Card.s9, Card.h4),
    new Combo(Card.s9, Card.c4),
    new Combo(Card.s9, Card.d4),
    new Combo(Card.h9, Card.c4),
    new Combo(Card.h9, Card.d4),
    new Combo(Card.h9, Card.s4),
    new Combo(Card.c9, Card.d4),
    new Combo(Card.c9, Card.h4),
    new Combo(Card.c9, Card.s4),
    new Combo(Card.d9, Card.s4),
    new Combo(Card.d9, Card.h4),
    new Combo(Card.d9, Card.c4)
  );

  static o93 = new HandComboModel(
    '93o',
    new Combo(Card.s9, Card.h3),
    new Combo(Card.s9, Card.c3),
    new Combo(Card.s9, Card.d3),
    new Combo(Card.h9, Card.c3),
    new Combo(Card.h9, Card.d3),
    new Combo(Card.h9, Card.s3),
    new Combo(Card.c9, Card.d3),
    new Combo(Card.c9, Card.h3),
    new Combo(Card.c9, Card.s3),
    new Combo(Card.d9, Card.s3),
    new Combo(Card.d9, Card.h3),
    new Combo(Card.d9, Card.c3)
  );

  static o92 = new HandComboModel(
    '92o',
    new Combo(Card.s9, Card.h2),
    new Combo(Card.s9, Card.c2),
    new Combo(Card.s9, Card.d2),
    new Combo(Card.h9, Card.c2),
    new Combo(Card.h9, Card.d2),
    new Combo(Card.h9, Card.s2),
    new Combo(Card.c9, Card.d2),
    new Combo(Card.c9, Card.h2),
    new Combo(Card.c9, Card.s2),
    new Combo(Card.d9, Card.s2),
    new Combo(Card.d9, Card.h2),
    new Combo(Card.d9, Card.c2)
  );

  // 8
  static p88 = new HandComboModel(
    '88',
    new Combo(Card.s8, Card.c8),
    new Combo(Card.s8, Card.h8),
    new Combo(Card.s8, Card.d8),
    new Combo(Card.c8, Card.h8),
    new Combo(Card.c8, Card.d8),
    new Combo(Card.h8, Card.d8)
  );

  static s87 = new HandComboModel(
    '87s',
    new Combo(Card.s8, Card.s7),
    new Combo(Card.h8, Card.h7),
    new Combo(Card.c8, Card.c7),
    new Combo(Card.d8, Card.d7)
  );

  static s86 = new HandComboModel(
    '86s',
    new Combo(Card.s8, Card.s6),
    new Combo(Card.h8, Card.h6),
    new Combo(Card.c8, Card.c6),
    new Combo(Card.d8, Card.d6)
  );

  static s85 = new HandComboModel(
    '85s',
    new Combo(Card.s8, Card.s5),
    new Combo(Card.h8, Card.h5),
    new Combo(Card.c8, Card.c5),
    new Combo(Card.d8, Card.d5)
  );

  static s84 = new HandComboModel(
    '84s',
    new Combo(Card.s8, Card.s4),
    new Combo(Card.h8, Card.h4),
    new Combo(Card.c8, Card.c4),
    new Combo(Card.d8, Card.d4)
  );

  static s83 = new HandComboModel(
    '83s',
    new Combo(Card.s8, Card.s3),
    new Combo(Card.h8, Card.h3),
    new Combo(Card.c8, Card.c3),
    new Combo(Card.d8, Card.d3)
  );

  static s82 = new HandComboModel(
    '82s',
    new Combo(Card.s8, Card.s2),
    new Combo(Card.h8, Card.h2),
    new Combo(Card.c8, Card.c2),
    new Combo(Card.d8, Card.d2)
  );

  static o87 = new HandComboModel(
    '87o',
    new Combo(Card.s8, Card.h7),
    new Combo(Card.s8, Card.c7),
    new Combo(Card.s8, Card.d7),
    new Combo(Card.h8, Card.c7),
    new Combo(Card.h8, Card.d7),
    new Combo(Card.h8, Card.s7),
    new Combo(Card.c8, Card.d7),
    new Combo(Card.c8, Card.h7),
    new Combo(Card.c8, Card.s7),
    new Combo(Card.d8, Card.s7),
    new Combo(Card.d8, Card.h7),
    new Combo(Card.d8, Card.c7)
  );

  static o86 = new HandComboModel(
    '86o',
    new Combo(Card.s8, Card.h6),
    new Combo(Card.s8, Card.c6),
    new Combo(Card.s8, Card.d6),
    new Combo(Card.h8, Card.c6),
    new Combo(Card.h8, Card.d6),
    new Combo(Card.h8, Card.s6),
    new Combo(Card.c8, Card.d6),
    new Combo(Card.c8, Card.h6),
    new Combo(Card.c8, Card.s6),
    new Combo(Card.d8, Card.s6),
    new Combo(Card.d8, Card.h6),
    new Combo(Card.d8, Card.c6)
  );

  static o85 = new HandComboModel(
    '85o',
    new Combo(Card.s8, Card.h5),
    new Combo(Card.s8, Card.c5),
    new Combo(Card.s8, Card.d5),
    new Combo(Card.h8, Card.c5),
    new Combo(Card.h8, Card.d5),
    new Combo(Card.h8, Card.s5),
    new Combo(Card.c8, Card.d5),
    new Combo(Card.c8, Card.h5),
    new Combo(Card.c8, Card.s5),
    new Combo(Card.d8, Card.s5),
    new Combo(Card.d8, Card.h5),
    new Combo(Card.d8, Card.c5)
  );

  static o84 = new HandComboModel(
    '84o',
    new Combo(Card.s8, Card.h4),
    new Combo(Card.s8, Card.c4),
    new Combo(Card.s8, Card.d4),
    new Combo(Card.h8, Card.c4),
    new Combo(Card.h8, Card.d4),
    new Combo(Card.h8, Card.s4),
    new Combo(Card.c8, Card.d4),
    new Combo(Card.c8, Card.h4),
    new Combo(Card.c8, Card.s4),
    new Combo(Card.d8, Card.s4),
    new Combo(Card.d8, Card.h4),
    new Combo(Card.d8, Card.c4)
  );

  static o83 = new HandComboModel(
    '83o',
    new Combo(Card.s8, Card.h3),
    new Combo(Card.s8, Card.c3),
    new Combo(Card.s8, Card.d3),
    new Combo(Card.h8, Card.c3),
    new Combo(Card.h8, Card.d3),
    new Combo(Card.h8, Card.s3),
    new Combo(Card.c8, Card.d3),
    new Combo(Card.c8, Card.h3),
    new Combo(Card.c8, Card.s3),
    new Combo(Card.d8, Card.s3),
    new Combo(Card.d8, Card.h3),
    new Combo(Card.d8, Card.c3)
  );

  static o82 = new HandComboModel(
    '82o',
    new Combo(Card.s8, Card.h2),
    new Combo(Card.s8, Card.c2),
    new Combo(Card.s8, Card.d2),
    new Combo(Card.h8, Card.c2),
    new Combo(Card.h8, Card.d2),
    new Combo(Card.h8, Card.s2),
    new Combo(Card.c8, Card.d2),
    new Combo(Card.c8, Card.h2),
    new Combo(Card.c8, Card.s2),
    new Combo(Card.d8, Card.s2),
    new Combo(Card.d8, Card.h2),
    new Combo(Card.d8, Card.c2)
  );

  // 7
  static p77 = new HandComboModel(
    '77',
    new Combo(Card.s7, Card.c7),
    new Combo(Card.s7, Card.h7),
    new Combo(Card.s7, Card.d7),
    new Combo(Card.c7, Card.h7),
    new Combo(Card.c7, Card.d7),
    new Combo(Card.h7, Card.d7)
  );

  static s76 = new HandComboModel(
    '76s',
    new Combo(Card.s7, Card.s6),
    new Combo(Card.h7, Card.h6),
    new Combo(Card.c7, Card.c6),
    new Combo(Card.d7, Card.d6)
  );

  static s75 = new HandComboModel(
    '75s',
    new Combo(Card.s7, Card.s5),
    new Combo(Card.h7, Card.h5),
    new Combo(Card.c7, Card.c5),
    new Combo(Card.d7, Card.d5)
  );

  static s74 = new HandComboModel(
    '74s',
    new Combo(Card.s7, Card.s4),
    new Combo(Card.h7, Card.h4),
    new Combo(Card.c7, Card.c4),
    new Combo(Card.d7, Card.d4)
  );

  static s73 = new HandComboModel(
    '73s',
    new Combo(Card.s7, Card.s3),
    new Combo(Card.h7, Card.h3),
    new Combo(Card.c7, Card.c3),
    new Combo(Card.d7, Card.d3)
  );

  static s72 = new HandComboModel(
    '72s',
    new Combo(Card.s7, Card.s2),
    new Combo(Card.h7, Card.h2),
    new Combo(Card.c7, Card.c2),
    new Combo(Card.d7, Card.d2)
  );

  static o76 = new HandComboModel(
    '76o',
    new Combo(Card.s7, Card.h6),
    new Combo(Card.s7, Card.c6),
    new Combo(Card.s7, Card.d6),
    new Combo(Card.h7, Card.c6),
    new Combo(Card.h7, Card.d6),
    new Combo(Card.h7, Card.s6),
    new Combo(Card.c7, Card.d6),
    new Combo(Card.c7, Card.h6),
    new Combo(Card.c7, Card.s6),
    new Combo(Card.d7, Card.s6),
    new Combo(Card.d7, Card.h6),
    new Combo(Card.d7, Card.c6)
  );

  static o75 = new HandComboModel(
    '75o',
    new Combo(Card.s7, Card.h5),
    new Combo(Card.s7, Card.c5),
    new Combo(Card.s7, Card.d5),
    new Combo(Card.h7, Card.c5),
    new Combo(Card.h7, Card.d5),
    new Combo(Card.h7, Card.s5),
    new Combo(Card.c7, Card.d5),
    new Combo(Card.c7, Card.h5),
    new Combo(Card.c7, Card.s5),
    new Combo(Card.d7, Card.s5),
    new Combo(Card.d7, Card.h5),
    new Combo(Card.d7, Card.c5)
  );

  static o74 = new HandComboModel(
    '74o',
    new Combo(Card.s7, Card.h4),
    new Combo(Card.s7, Card.c4),
    new Combo(Card.s7, Card.d4),
    new Combo(Card.h7, Card.c4),
    new Combo(Card.h7, Card.d4),
    new Combo(Card.h7, Card.s4),
    new Combo(Card.c7, Card.d4),
    new Combo(Card.c7, Card.h4),
    new Combo(Card.c7, Card.s4),
    new Combo(Card.d7, Card.s4),
    new Combo(Card.d7, Card.h4),
    new Combo(Card.d7, Card.c4)
  );

  static o73 = new HandComboModel(
    '73o',
    new Combo(Card.s7, Card.h3),
    new Combo(Card.s7, Card.c3),
    new Combo(Card.s7, Card.d3),
    new Combo(Card.h7, Card.c3),
    new Combo(Card.h7, Card.d3),
    new Combo(Card.h7, Card.s3),
    new Combo(Card.c7, Card.d3),
    new Combo(Card.c7, Card.h3),
    new Combo(Card.c7, Card.s3),
    new Combo(Card.d7, Card.s3),
    new Combo(Card.d7, Card.h3),
    new Combo(Card.d7, Card.c3)
  );

  static o72 = new HandComboModel(
    '72o',
    new Combo(Card.s7, Card.h2),
    new Combo(Card.s7, Card.c2),
    new Combo(Card.s7, Card.d2),
    new Combo(Card.h7, Card.c2),
    new Combo(Card.h7, Card.d2),
    new Combo(Card.h7, Card.s2),
    new Combo(Card.c7, Card.d2),
    new Combo(Card.c7, Card.h2),
    new Combo(Card.c7, Card.s2),
    new Combo(Card.d7, Card.s2),
    new Combo(Card.d7, Card.h2),
    new Combo(Card.d7, Card.c2)
  );

  // 6
  static p66 = new HandComboModel(
    '66',
    new Combo(Card.s6, Card.c6),
    new Combo(Card.s6, Card.h6),
    new Combo(Card.s6, Card.d6),
    new Combo(Card.c6, Card.h6),
    new Combo(Card.c6, Card.d6),
    new Combo(Card.h6, Card.d6)
  );

  static s65 = new HandComboModel(
    '65s',
    new Combo(Card.s6, Card.s5),
    new Combo(Card.h6, Card.h5),
    new Combo(Card.c6, Card.c5),
    new Combo(Card.d6, Card.d5)
  );

  static s64 = new HandComboModel(
    '64s',
    new Combo(Card.s6, Card.s4),
    new Combo(Card.h6, Card.h4),
    new Combo(Card.c6, Card.c4),
    new Combo(Card.d6, Card.d4)
  );

  static s63 = new HandComboModel(
    '63s',
    new Combo(Card.s6, Card.s3),
    new Combo(Card.h6, Card.h3),
    new Combo(Card.c6, Card.c3),
    new Combo(Card.d6, Card.d3)
  );

  static s62 = new HandComboModel(
    '62s',
    new Combo(Card.s6, Card.s2),
    new Combo(Card.h6, Card.h2),
    new Combo(Card.c6, Card.c2),
    new Combo(Card.d6, Card.d2)
  );

  static o65 = new HandComboModel(
    '65o',
    new Combo(Card.s6, Card.h5),
    new Combo(Card.s6, Card.c5),
    new Combo(Card.s6, Card.d5),
    new Combo(Card.h6, Card.c5),
    new Combo(Card.h6, Card.d5),
    new Combo(Card.h6, Card.s5),
    new Combo(Card.c6, Card.d5),
    new Combo(Card.c6, Card.h5),
    new Combo(Card.c6, Card.s5),
    new Combo(Card.d6, Card.s5),
    new Combo(Card.d6, Card.h5),
    new Combo(Card.d6, Card.c5)
  );

  static o64 = new HandComboModel(
    '64o',
    new Combo(Card.s6, Card.h4),
    new Combo(Card.s6, Card.c4),
    new Combo(Card.s6, Card.d4),
    new Combo(Card.h6, Card.c4),
    new Combo(Card.h6, Card.d4),
    new Combo(Card.h6, Card.s4),
    new Combo(Card.c6, Card.d4),
    new Combo(Card.c6, Card.h4),
    new Combo(Card.c6, Card.s4),
    new Combo(Card.d6, Card.s4),
    new Combo(Card.d6, Card.h4),
    new Combo(Card.d6, Card.c4)
  );

  static o63 = new HandComboModel(
    '63o',
    new Combo(Card.s6, Card.h3),
    new Combo(Card.s6, Card.c3),
    new Combo(Card.s6, Card.d3),
    new Combo(Card.h6, Card.c3),
    new Combo(Card.h6, Card.d3),
    new Combo(Card.h6, Card.s3),
    new Combo(Card.c6, Card.d3),
    new Combo(Card.c6, Card.h3),
    new Combo(Card.c6, Card.s3),
    new Combo(Card.d6, Card.s3),
    new Combo(Card.d6, Card.h3),
    new Combo(Card.d6, Card.c3)
  );

  static o62 = new HandComboModel(
    '62o',
    new Combo(Card.s6, Card.h2),
    new Combo(Card.s6, Card.c2),
    new Combo(Card.s6, Card.d2),
    new Combo(Card.h6, Card.c2),
    new Combo(Card.h6, Card.d2),
    new Combo(Card.h6, Card.s2),
    new Combo(Card.c6, Card.d2),
    new Combo(Card.c6, Card.h2),
    new Combo(Card.c6, Card.s2),
    new Combo(Card.d6, Card.s2),
    new Combo(Card.d6, Card.h2),
    new Combo(Card.d6, Card.c2)
  );

  // 5
  static p55 = new HandComboModel(
    '55',
    new Combo(Card.s5, Card.c5),
    new Combo(Card.s5, Card.h5),
    new Combo(Card.s5, Card.d5),
    new Combo(Card.c5, Card.h5),
    new Combo(Card.c5, Card.d5),
    new Combo(Card.h5, Card.d5)
  );

  static s54 = new HandComboModel(
    '54s',
    new Combo(Card.s5, Card.s4),
    new Combo(Card.h5, Card.h4),
    new Combo(Card.c5, Card.c4),
    new Combo(Card.d5, Card.d4)
  );

  static s53 = new HandComboModel(
    '53s',
    new Combo(Card.s5, Card.s3),
    new Combo(Card.h5, Card.h3),
    new Combo(Card.c5, Card.c3),
    new Combo(Card.d5, Card.d3)
  );

  static s52 = new HandComboModel(
    '52s',
    new Combo(Card.s5, Card.s2),
    new Combo(Card.h5, Card.h2),
    new Combo(Card.c5, Card.c2),
    new Combo(Card.d5, Card.d2)
  );

  static o54 = new HandComboModel(
    '54o',
    new Combo(Card.s5, Card.h4),
    new Combo(Card.s5, Card.c4),
    new Combo(Card.s5, Card.d4),
    new Combo(Card.h5, Card.c4),
    new Combo(Card.h5, Card.d4),
    new Combo(Card.h5, Card.s4),
    new Combo(Card.c5, Card.d4),
    new Combo(Card.c5, Card.h4),
    new Combo(Card.c5, Card.s4),
    new Combo(Card.d5, Card.s4),
    new Combo(Card.d5, Card.h4),
    new Combo(Card.d5, Card.c4)
  );

  static o53 = new HandComboModel(
    '53o',
    new Combo(Card.s5, Card.h3),
    new Combo(Card.s5, Card.c3),
    new Combo(Card.s5, Card.d3),
    new Combo(Card.h5, Card.c3),
    new Combo(Card.h5, Card.d3),
    new Combo(Card.h5, Card.s3),
    new Combo(Card.c5, Card.d3),
    new Combo(Card.c5, Card.h3),
    new Combo(Card.c5, Card.s3),
    new Combo(Card.d5, Card.s3),
    new Combo(Card.d5, Card.h3),
    new Combo(Card.d5, Card.c3)
  );

  static o52 = new HandComboModel(
    '52o',
    new Combo(Card.s5, Card.h2),
    new Combo(Card.s5, Card.c2),
    new Combo(Card.s5, Card.d2),
    new Combo(Card.h5, Card.c2),
    new Combo(Card.h5, Card.d2),
    new Combo(Card.h5, Card.s2),
    new Combo(Card.c5, Card.d2),
    new Combo(Card.c5, Card.h2),
    new Combo(Card.c5, Card.s2),
    new Combo(Card.d5, Card.s2),
    new Combo(Card.d5, Card.h2),
    new Combo(Card.d5, Card.c2)
  );

  // 4
  static p44 = new HandComboModel(
    '55',
    new Combo(Card.s5, Card.c5),
    new Combo(Card.s5, Card.h5),
    new Combo(Card.s5, Card.d5),
    new Combo(Card.c5, Card.h5),
    new Combo(Card.c5, Card.d5),
    new Combo(Card.h5, Card.d5)
  );

  static s43 = new HandComboModel(
    '43s',
    new Combo(Card.s4, Card.s3),
    new Combo(Card.h4, Card.h3),
    new Combo(Card.c4, Card.c3),
    new Combo(Card.d4, Card.d3)
  );

  static s42 = new HandComboModel(
    '42s',
    new Combo(Card.s4, Card.s2),
    new Combo(Card.h4, Card.h2),
    new Combo(Card.c4, Card.c2),
    new Combo(Card.d4, Card.d2)
  );

  static o43 = new HandComboModel(
    '43o',
    new Combo(Card.s4, Card.h3),
    new Combo(Card.s4, Card.c3),
    new Combo(Card.s4, Card.d3),
    new Combo(Card.h4, Card.c3),
    new Combo(Card.h4, Card.d3),
    new Combo(Card.h4, Card.s3),
    new Combo(Card.c4, Card.d3),
    new Combo(Card.c4, Card.h3),
    new Combo(Card.c4, Card.s3),
    new Combo(Card.d4, Card.s3),
    new Combo(Card.d4, Card.h3),
    new Combo(Card.d4, Card.c3)
  );

  static o42 = new HandComboModel(
    '42o',
    new Combo(Card.s4, Card.h2),
    new Combo(Card.s4, Card.c2),
    new Combo(Card.s4, Card.d2),
    new Combo(Card.h4, Card.c2),
    new Combo(Card.h4, Card.d2),
    new Combo(Card.h4, Card.s2),
    new Combo(Card.c4, Card.d2),
    new Combo(Card.c4, Card.h2),
    new Combo(Card.c4, Card.s2),
    new Combo(Card.d4, Card.s2),
    new Combo(Card.d4, Card.h2),
    new Combo(Card.d4, Card.c2)
  );

  // 3
  static p33 = new HandComboModel(
    '33',
    new Combo(Card.s3, Card.c3),
    new Combo(Card.s3, Card.h3),
    new Combo(Card.s3, Card.d3),
    new Combo(Card.c3, Card.h3),
    new Combo(Card.c3, Card.d3),
    new Combo(Card.h3, Card.d3)
  );

  static s32 = new HandComboModel(
    '32s',
    new Combo(Card.s3, Card.s2),
    new Combo(Card.h3, Card.h2),
    new Combo(Card.c3, Card.c2),
    new Combo(Card.d3, Card.d2)
  );

  static o32 = new HandComboModel(
    '32o',
    new Combo(Card.s3, Card.h2),
    new Combo(Card.s3, Card.c2),
    new Combo(Card.s3, Card.d2),
    new Combo(Card.h3, Card.c2),
    new Combo(Card.h3, Card.d2),
    new Combo(Card.h3, Card.s2),
    new Combo(Card.c3, Card.d2),
    new Combo(Card.c3, Card.h2),
    new Combo(Card.c3, Card.s2),
    new Combo(Card.d3, Card.s2),
    new Combo(Card.d3, Card.h2),
    new Combo(Card.d3, Card.c2)
  );

  static p22 = new HandComboModel(
    '22',
    new Combo(Card.s2, Card.c2),
    new Combo(Card.s2, Card.h2),
    new Combo(Card.s2, Card.d2),
    new Combo(Card.c2, Card.h2),
    new Combo(Card.c2, Card.d2),
    new Combo(Card.h2, Card.d2)
  );
}
