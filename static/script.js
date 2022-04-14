airports = ['LGA', 'TPA', 'MSP', 'BOS', 'MKE', 'EWR', 'PHX', 'PIT', 'LAX',
					'DAL', 'ATL', 'HOU', 'ORD', 'SMF', 'MCO', 'SEA', 'BWI', 'ISN', 'MIA', 'ONT',
					'FAR', 'CLT', 'DFW', 'DCA', 'DVL', 'SDF', 'DEN', 'SFO', 'DSM', 'RSW', 'OAK',
					'DTW', 'ELP', 'RIC', 'SAT', 'PVD', 'JFK', 'SAN', 'PDX', 'IAH', 'LAS', 'MDW',
					'OKC', 'AUS', 'CAK', 'HNL', 'MAF', 'CAE', 'AGS', 'MLI', 'CLE', 'PHL', 'TUS',
					'LGB', 'SNA', 'IND', 'MSN', 'BNA', 'BOI', 'BDL', 'SLC', 'MDT', 'STL', 'KOA',
					'PSP', 'RNO', 'ANC', 'RDU', 'LBB', 'MSY', 'ROC', 'GJT', 'MCI', 'PIH', 'OMA',
					'ATW', 'FLL', 'STT', 'LIH', 'GPT', 'CHS', 'AMA', 'TUL', 'PBI', 'VPS', 'DLH',
					'CMX', 'SJC', 'BUF', 'TRI', 'IAD', 'BTR', 'MHT', 'OGG', 'AEX', 'MFR', 'SJU',
					'YUM', 'SGU', 'TTN', 'ABE', 'SHV', 'JAX', 'FSM', 'OAJ', 'CMH', 'COS', 'MEM',
					'HSV', 'BLI', 'RDM', 'GEG', 'GRR', 'CRP', 'ABQ', 'PAH', 'DRO', 'LIT', 'SBA',
					'FNT', 'BHM', 'PNS', 'AVP', 'ICT', 'FCA', 'BUR', 'TYS', 'PSC', 'GSP', 'FWA',
					'ECP', 'MTJ', 'FSD', 'PHF', 'LNK', 'ORF', 'JAC', 'EUG', 'AVL', 'ASE', 'SJT',
					'MRY', 'VLD', 'EGE', 'MGM', 'BTV', 'GRB', 'PSG', 'CRW', 'GTR', 'ISP', 'ROA',
					'GSO', 'BMI', 'KTN', 'CVG', 'SGF', 'ABY', 'TVC', 'ITO', 'LAN', 'CWA', 'IAG',
					'MSO', 'SBN', 'LFT', 'MLB', 'BZN', 'CHA', 'FAY', 'ABR', 'GNV', 'CID', 'BFL',
					'HRL', 'DAY', 'IMT', 'SBP', 'CHO', 'MFE', 'PSE', 'SAV', 'RST', 'DAB', 'PIA',
					'COD', 'CDC', 'MYR', 'TLH', 'ILM', 'EVV', 'PWM', 'MLU', 'OTZ', 'FAT', 'BIL',
					'IDA', 'HDN', 'ALB', 'SWF', 'GTF', 'SRQ', 'RAP', 'ACY', 'BRW', 'ELM', 'LAR',
					'WRG', 'PLN', 'YAK', 'INL', 'ORH', 'LEX', 'XNA', 'SCC', 'HIB', 'JAN', 'MQT',
					'LRD', 'CPR', 'MMH', 'MOT', 'GUM', 'SUN', 'BRD', 'GRK', 'FLG', 'SYR', 'HPN',
					'BQK', 'BRO', 'MEI', 'GUC', 'EWN', 'MOB', 'SPI', 'APN', 'CDV', 'SPS', 'HOB',
					'GFK', 'AZO', 'TWF', 'DHN', 'ACT', 'GCC', 'EKO', 'MBS', 'BIS', 'BET', 'JMS',
					'SIT', 'BGM', 'ESC', 'RDD', 'BQN', 'STS', 'RKS', 'LCH', 'LBE', 'HLN', 'TYR',
					'JNU', 'BTM', 'ERI', 'CIU', 'EYW', 'ITH', 'STX', 'CLL', 'IFP', 'ACV', 'EAU',
					'PPG', 'FAI', 'LSE', 'LAW', 'OTH', 'PBG', 'LWS', 'BJI', 'COU', 'SCE', 'SAF',
					'OME', 'MKG', 'PGD', 'GCK', 'PIB', 'ALO', 'ROW', 'SUX', 'HYS', 'MHK', 'CSG',
					'RHI', 'ADQ', 'WYS', 'UST', 'ACK', 'JLN', 'BGR', 'GST', 'TOL', 'GRI', 'HYA',
       				'CKB', 'CGI', 'PVU', 'UIN', 'TXK', 'SFB', 'PIE', 'AZA', 'LCK', 'CMI', 'SWO',
       				'BLV', 'LBF', 'HVN', 'PUB', 'DBQ', 'HTS', 'RFD', 'PSM', 'LYH', 'ABI', 'USA',
       				'SCK', 'PGV', 'GGG', 'FLO', 'BPT', 'BFF', 'LBL', 'STC', 'SHD', 'OWB', 'LWB',
       				'SLN', 'MVY', 'SPN', 'AKN', 'HGR', 'VEL', 'HHH', 'PRC', 'BKG', 'DRT', 'CYS',
       				'EAR', 'CNY', 'SMX', 'ART', 'PAE', 'PIR', 'OGS', 'BFM', 'DLG', 'XWA', 'RIW',
       				'SHR', 'ATY', 'DEC', 'DIK', 'CDB', 'DDC', 'IPT', 'ADK', 'OGD', 'JST', 'PUW',
       				'VCT', 'EAT', 'YKM', 'MCW', 'ALS', 'FOD', 'ALW', 'TBN']

function myFunc(id) {
	for (airport of airports.sort()){
		var tag = document.createElement("option")
		var text = document.createTextNode(airport);
		tag.appendChild(text);
		tag.value = airport;
		var element = document.getElementById(id);
		element.appendChild(tag);
	}
}