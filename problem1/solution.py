mport collections;

def check(target, std):
        cnt = 0;
            for i in range(len(target)):
                        if target[i] != std[i]:
                                        cnt += 1;
                                            return cnt;

                                        def solution(s1, s2):
                                                hamming_dist_dict = collections.defaultdict(list);

                                                    for i in range(len(s1) - len(s2) + 1):
                                                                hamming_value = check(s1[i:i+len(s2)], s2);
                                                                        hamming_dist_dict[hamming_value].append(i)

                                                                            return hamming_dist_dict[min(hamming_dist_dict.keys())];

